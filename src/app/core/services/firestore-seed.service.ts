/**
 * core/services/firestore-seed.service.ts
 *
 * Utility service to seed Firestore with the app's initial mock data.
 *
 * This service is meant to be called ONCE during app bootstrap or via a
 * developer tool. It is idempotent: if the _meta/seeded document already
 * exists, it skips the seeding step (use resetAndSeed() to force a re-seed).
 *
 * Usage — call from app.component.ts or a dev route:
 *
 *   // Check and seed only if needed (safe to call on every boot)
 *   await this.seedService.seedIfEmpty();
 *
 *   // Force full reset + re-seed (wipes existing data first)
 *   await this.seedService.resetAndSeed();
 *
 * Collections populated:
 *   user_stats, profiles, achievements,
 *   events, challenges,
 *   groups, communities,
 *   leaderboard, teams, championships,
 *   conversations, messages
 */

import { Injectable, inject } from '@angular/core';
import {
  Firestore,
  collection,
  doc,
  getDocFromServer,
  getDocs,
  setDoc,
  writeBatch,
  WriteBatch,
} from 'firebase/firestore';
import { FIRESTORE, DB_ROOT } from '../firebase/firebase.provider';
import {
  MOCK_PROFILES,
  MOCK_USER_STATS,
  MOCK_ACHIEVEMENTS,
  MOCK_EVENTS,
  MOCK_CHALLENGES,
  MOCK_GROUPS,
  MOCK_COMMUNITIES,
  MOCK_LEADERBOARD,
  MOCK_TEAMS,
  MOCK_CHAMPIONSHIPS,
} from '../repositories/in-memory/mock-data';
import { Conversation, ChatMessage } from '../../store/chat/chat.model';

// ---------------------------------------------------------------------------
// Chat seed data (mirrors in-memory-chat.repository.ts constants)
// ---------------------------------------------------------------------------

const SEED_CONVERSATIONS: Conversation[] = [
  { id: 1, name: 'Camila', lastMessage: '¡Nos vemos en el parque a las 10!', time: '10:30 AM', unread: 2, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Camila', online: true },
  { id: 2, name: 'Grupo Running', lastMessage: 'Diego: ¿Quién lleva agua?', time: '9:15 AM', unread: 0, avatar: 'https://api.dicebear.com/7.x/identicon/svg?seed=Running', online: false },
  { id: 3, name: 'Javier', lastMessage: 'Buen partido el de ayer 🤙', time: 'Ayer', unread: 0, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Javier', online: true },
  { id: 4, name: 'Ana P.', lastMessage: '¿Te sumas al padel el jueves?', time: 'Ayer', unread: 0, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ana', online: false },
  { id: 5, name: 'Carlos D.', lastMessage: 'Te envié la solicitud del evento', time: 'Lun', unread: 0, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos', online: false },
];

const SEED_MESSAGES: (ChatMessage & { _order: number })[] = [
  { id: 'm1', conversationId: 1, senderId: 'me', text: '¡Hola Camila! ¿Vas a ir al evento de running hoy?', timestamp: '10:28 AM', read: true, _order: 1 },
  { id: 'm2', conversationId: 1, senderId: 'camila', text: '¡Sii! Justo iba saliendo. ¿Nos juntamos allá?', timestamp: '10:29 AM', read: true, _order: 2 },
  { id: 'm3', conversationId: 1, senderId: 'me', text: '¡Dale! Nos vemos en la entrada del parque a las 10.', timestamp: '10:29 AM', read: true, _order: 3 },
  { id: 'm4', conversationId: 1, senderId: 'camila', text: '¡Nos vemos en el parque a las 10! 🏃‍♀️', timestamp: '10:30 AM', read: false, _order: 4 },
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Commit in chunks of 500 (Firestore batch limit). */
async function commitBatches(db: Firestore, ops: Array<(batch: WriteBatch) => void>): Promise<void> {
  const CHUNK = 490;
  for (let i = 0; i < ops.length; i += CHUNK) {
    const batch = writeBatch(db);
    ops.slice(i, i + CHUNK).forEach(op => op(batch));
    await batch.commit();
  }
}

/** Delete all documents in a collection. */
async function clearCollection(db: Firestore, collectionName: string): Promise<void> {
  const snapshot = await getDocs(collection(db, collectionName));
  if (snapshot.empty) return;
  const ops = snapshot.docs.map(d => (batch: WriteBatch) => batch.delete(d.ref));
  await commitBatches(db, ops);
}

// ---------------------------------------------------------------------------
// Service
// ---------------------------------------------------------------------------

@Injectable({ providedIn: 'root' })
export class FirestoreSeedService {
  private readonly db = inject(FIRESTORE);

  /**
   * Seeds Firestore only if the _meta/seeded document is absent.
   * Safe to call on every app boot — it is a no-op after the first seed.
   */
  async seedIfEmpty(): Promise<void> {
    const metaRef = doc(this.db, `${DB_ROOT}/_meta/seeded`);
    const metaSnap = await this._getDocWithRetry(metaRef);
    if (metaSnap) return;
    await this._writeAll();
    await setDoc(metaRef, { at: new Date().toISOString() });
    console.log('[FirestoreSeedService] Seed completed.');
  }

  /**
   * Retries getDocFromServer up to maxAttempts times with exponential backoff.
   * Returns true if the document exists, false if it doesn't.
   * Throws only after all retries are exhausted.
   */
  private async _getDocWithRetry(
    ref: Parameters<typeof getDocFromServer>[0],
    maxAttempts = 4,
  ): Promise<boolean> {
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      try {
        const snap = await getDocFromServer(ref);
        return snap.exists();
      } catch (err: unknown) {
        const isOffline =
          err instanceof Error && err.message.toLowerCase().includes('offline');
        if (!isOffline || attempt === maxAttempts) throw err;
        const delay = 500 * 2 ** (attempt - 1); // 500ms, 1s, 2s
        console.warn(`[FirestoreSeedService] Offline, retrying in ${delay}ms… (${attempt}/${maxAttempts})`);
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
    return false;
  }

  /**
   * Wipes all seeded collections and re-seeds from mock data.
   * Use this during development to reset to a known state.
   */
  async resetAndSeed(): Promise<void> {
    console.log('[FirestoreSeedService] Resetting Firestore…');
    await this._clearAll();
    await this._writeAll();
    await setDoc(doc(this.db, `${DB_ROOT}/_meta/seeded`), { at: new Date().toISOString() });
    console.log('[FirestoreSeedService] Reset and re-seed completed.');
  }

  // -------------------------------------------------------------------------
  // Private helpers
  // -------------------------------------------------------------------------

  private async _clearAll(): Promise<void> {
    const subcollections = [
      'user_stats', 'profiles', 'achievements',
      'events', 'challenges',
      'groups', 'communities',
      'leaderboard', 'teams', 'championships',
      'conversations', 'messages', '_meta',
    ];
    await Promise.all(subcollections.map(c => clearCollection(this.db, `${DB_ROOT}/${c}`)));
  }

  private async _writeAll(): Promise<void> {
    const db = this.db;
    const ops: Array<(batch: WriteBatch) => void> = [];

    // user_stats — single document
    ops.push(batch => batch.set(doc(db, `${DB_ROOT}/user_stats/me`), { ...MOCK_USER_STATS }));

    // profiles
    MOCK_PROFILES.forEach(p =>
      ops.push(batch => batch.set(doc(db, `${DB_ROOT}/profiles/${String(p.id)}`), { ...p })),
    );

    // achievements
    MOCK_ACHIEVEMENTS.forEach(a =>
      ops.push(batch => batch.set(doc(db, `${DB_ROOT}/achievements/${String(a.id)}`), { ...a })),
    );

    // events
    MOCK_EVENTS.forEach(e =>
      ops.push(batch => batch.set(doc(db, `${DB_ROOT}/events/${String(e.id)}`), { ...e })),
    );

    // challenges
    MOCK_CHALLENGES.forEach(c =>
      ops.push(batch => batch.set(doc(db, `${DB_ROOT}/challenges/${String(c.id)}`), { ...c })),
    );

    // groups
    MOCK_GROUPS.forEach(g =>
      ops.push(batch => batch.set(doc(db, `${DB_ROOT}/groups/${String(g.id)}`), { ...g })),
    );

    // communities
    MOCK_COMMUNITIES.forEach(c =>
      ops.push(batch => batch.set(doc(db, `${DB_ROOT}/communities/${String(c.id)}`), { ...c })),
    );

    // leaderboard
    MOCK_LEADERBOARD.forEach(entry =>
      ops.push(batch => batch.set(doc(db, `${DB_ROOT}/leaderboard/${String(entry.rank)}`), { ...entry })),
    );

    // teams
    MOCK_TEAMS.forEach(t =>
      ops.push(batch => batch.set(doc(db, `${DB_ROOT}/teams/${String(t.id)}`), { ...t })),
    );

    // championships
    MOCK_CHAMPIONSHIPS.forEach(ch =>
      ops.push(batch => batch.set(doc(db, `${DB_ROOT}/championships/${String(ch.id)}`), { ...ch })),
    );

    // conversations
    SEED_CONVERSATIONS.forEach(conv =>
      ops.push(batch => batch.set(doc(db, `${DB_ROOT}/conversations/${String(conv.id)}`), { ...conv })),
    );

    // messages
    SEED_MESSAGES.forEach(msg =>
      ops.push(batch => batch.set(doc(db, `${DB_ROOT}/messages/${msg.id}`), { ...msg })),
    );

    await commitBatches(db, ops);
  }
}
