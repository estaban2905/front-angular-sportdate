/**
 * core/services/firestore-seed.service.ts
 *
 * Utility service to seed Firestore with the app's initial mock data.
 *
 * This service is idempotent: if the _meta/seeded document already
 * exists, seedIfEmpty() is a no-op. Use resetAndSeed() to force a re-seed.
 *
 * Public API:
 *   seedIfEmpty()             — safe to call on every boot
 *   resetAndSeed()            — wipes all collections + re-seeds
 *   clearAll()                — wipes all collections without re-seeding
 *   restoreCollection(name)   — wipes one collection + restores its mock data
 *
 * Collections populated:
 *   user_stats, profiles, achievements,
 *   events, challenges,
 *   groups, communities,
 *   leaderboard, teams, championships,
 *   retos, resultados, calificaciones,
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
  MOCK_ATTENDANCES,
  MOCK_GROUPS,
  MOCK_COMMUNITIES,
  MOCK_LEADERBOARD,
  MOCK_TEAMS,
  MOCK_CHAMPIONSHIPS,
  MOCK_RETOS,
  MOCK_RESULTADOS,
  MOCK_CALIFICACIONES,
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
// Helpers (module-level, no DI needed)
// ---------------------------------------------------------------------------

/** Commit write operations in chunks of 490 (Firestore batch limit is 500). */
async function commitBatches(db: Firestore, ops: Array<(batch: WriteBatch) => void>): Promise<void> {
  const CHUNK = 490;
  for (let i = 0; i < ops.length; i += CHUNK) {
    const batch = writeBatch(db);
    ops.slice(i, i + CHUNK).forEach(op => op(batch));
    await batch.commit();
  }
}

/** Delete every document in a Firestore collection path. */
async function clearCollectionPath(db: Firestore, path: string): Promise<void> {
  const snap = await getDocs(collection(db, path));
  if (snap.empty) return;
  const ops = snap.docs.map(d => (batch: WriteBatch) => batch.delete(d.ref));
  await commitBatches(db, ops);
}

// ---------------------------------------------------------------------------
// Service
// ---------------------------------------------------------------------------

@Injectable({ providedIn: 'root' })
export class FirestoreSeedService {
  private readonly db = inject(FIRESTORE);
  private readonly dbRoot = inject(DB_ROOT);

  // ---------------------------------------------------------------------------
  // Path helper
  // ---------------------------------------------------------------------------

  /** Builds a Firestore path relative to the app's DB root. */
  private p(...segments: string[]): string {
    return this.dbRoot ? [this.dbRoot, ...segments].join('/') : segments.join('/');
  }

  // ---------------------------------------------------------------------------
  // Public API
  // ---------------------------------------------------------------------------

  /**
   * Seeds Firestore only if the _meta/seeded document is absent.
   * Also seeds any NEW collections that were added after the initial seed.
   * Safe to call on every app boot.
   */
  async seedIfEmpty(): Promise<void> {
    const metaRef = doc(this.db, this.p('_meta', 'seeded'));
    const exists = await this._getDocWithRetry(metaRef);
    if (!exists) {
      await this._writeAll();
      await setDoc(metaRef, { at: new Date().toISOString() });
      console.log('[FirestoreSeedService] Seed completed.');
    } else {
      // Seed new collections added after the initial seed (one-shot, non-destructive)
      await this._seedNewCollections();
    }
  }

  /**
   * Seeds collections that didn't exist during the initial seed.
   * Only writes if the collection is empty.
   */
  private async _seedNewCollections(): Promise<void> {
    const newCollections = ['retos', 'resultados', 'calificaciones'] as const;
    for (const name of newCollections) {
      const snap = await getDocs(collection(this.db, this.p(name)));
      if (snap.empty) {
        const ops = this._getRestoreOps(name);
        if (ops.length > 0) {
          await commitBatches(this.db, ops);
          console.log(`[FirestoreSeedService] Seeded new collection: ${name} (${ops.length} docs).`);
        }
      }
    }
  }

  /**
   * Wipes all seeded collections and re-seeds from mock data.
   * Use during development to reset to a known state.
   */
  async resetAndSeed(): Promise<void> {
    console.log('[FirestoreSeedService] Resetting Firestore…');
    await this._clearAll();
    await this._writeAll();
    await setDoc(doc(this.db, this.p('_meta', 'seeded')), { at: new Date().toISOString() });
    console.log('[FirestoreSeedService] Reset and re-seed completed.');
  }

  /**
   * Clears all seeded collections without re-seeding.
   */
  async clearAll(): Promise<void> {
    console.log('[FirestoreSeedService] Clearing all collections…');
    await this._clearAll();
    console.log('[FirestoreSeedService] All collections cleared.');
  }

  /**
   * Clears a single collection and restores it from mock data.
   * Collections without mock data (conversations, messages) are only cleared.
   */
  async restoreCollection(name: string): Promise<void> {
    console.log(`[FirestoreSeedService] Restoring collection: ${name}…`);
    await clearCollectionPath(this.db, this.p(name));
    const ops = this._getRestoreOps(name);
    if (ops.length > 0) {
      await commitBatches(this.db, ops);
    }
    console.log(`[FirestoreSeedService] Restored ${name} (${ops.length} docs).`);
  }

  // ---------------------------------------------------------------------------
  // Private helpers
  // ---------------------------------------------------------------------------

  private async _clearAll(): Promise<void> {
    const collections = [
      'user_stats', 'profiles', 'achievements',
      'events', 'challenges',
      'groups', 'communities',
      'leaderboard', 'teams', 'championships',
      'retos', 'resultados', 'calificaciones',
      'conversations', 'messages', '_meta',
    ];
    await Promise.all(collections.map(c => clearCollectionPath(this.db, this.p(c))));
    // Clear attendances subcollections for each mock event
    await Promise.all(
      MOCK_EVENTS.map(e =>
        clearCollectionPath(this.db, this.p('events', e.id, 'attendances')),
      ),
    );
  }

  private async _writeAll(): Promise<void> {
    const db = this.db;
    const ops: Array<(batch: WriteBatch) => void> = [];

    // user_stats — single document
    ops.push(batch => batch.set(doc(db, this.p('user_stats', 'me')), { ...MOCK_USER_STATS }));

    // All collection arrays
    for (const op of this._getRestoreOps('profiles'))      ops.push(op);
    for (const op of this._getRestoreOps('achievements'))  ops.push(op);
    for (const op of this._getRestoreOps('events'))        ops.push(op);
    for (const op of this._getRestoreOps('challenges'))    ops.push(op);
    for (const op of this._getRestoreOps('groups'))        ops.push(op);
    for (const op of this._getRestoreOps('communities'))   ops.push(op);
    for (const op of this._getRestoreOps('leaderboard'))   ops.push(op);
    for (const op of this._getRestoreOps('teams'))         ops.push(op);
    for (const op of this._getRestoreOps('championships'))  ops.push(op);
    for (const op of this._getRestoreOps('retos'))          ops.push(op);
    for (const op of this._getRestoreOps('resultados'))     ops.push(op);
    for (const op of this._getRestoreOps('calificaciones')) ops.push(op);

    // conversations & messages
    SEED_CONVERSATIONS.forEach(conv =>
      ops.push(batch => batch.set(doc(db, this.p('conversations', String(conv.id))), { ...conv })),
    );
    SEED_MESSAGES.forEach(msg =>
      ops.push(batch => batch.set(doc(db, this.p('messages', msg.id)), { ...msg })),
    );

    // attendances subcollections (events/{id}/attendances/{userId})
    for (const [eventId, attendances] of Object.entries(MOCK_ATTENDANCES)) {
      for (const att of attendances) {
        ops.push(batch =>
          batch.set(
            doc(db, this.p('events', eventId, 'attendances', att.userId)),
            { ...att },
          ),
        );
      }
    }

    await commitBatches(db, ops);
  }

  /**
   * Returns batch write operations to restore a specific collection from mock data.
   * Returns an empty array for collections without restorable mock data.
   */
  private _getRestoreOps(name: string): Array<(batch: WriteBatch) => void> {
    const db = this.db;
    switch (name) {
      case 'profiles':
        return MOCK_PROFILES.map(p =>
          batch => batch.set(doc(db, this.p('profiles', String(p.id))), { ...p }),
        );
      case 'achievements':
        return MOCK_ACHIEVEMENTS.map(a =>
          batch => batch.set(doc(db, this.p('achievements', String(a.id))), { ...a }),
        );
      case 'events':
        return MOCK_EVENTS.map(e =>
          batch => batch.set(doc(db, this.p('events', String(e.id))), { ...e }),
        );
      case 'challenges':
        return MOCK_CHALLENGES.map(c =>
          batch => batch.set(doc(db, this.p('challenges', String(c.id))), { ...c }),
        );
      case 'groups':
        return MOCK_GROUPS.map(g =>
          batch => batch.set(doc(db, this.p('groups', String(g.id))), { ...g }),
        );
      case 'communities':
        return MOCK_COMMUNITIES.map(c =>
          batch => batch.set(doc(db, this.p('communities', String(c.id))), { ...c }),
        );
      case 'leaderboard':
        return MOCK_LEADERBOARD.map(e =>
          batch => batch.set(doc(db, this.p('leaderboard', String(e.rank))), { ...e }),
        );
      case 'teams':
        return MOCK_TEAMS.map(t =>
          batch => batch.set(doc(db, this.p('teams', String(t.id))), { ...t }),
        );
      case 'championships':
        return MOCK_CHAMPIONSHIPS.map(ch =>
          batch => batch.set(doc(db, this.p('championships', String(ch.id))), { ...ch }),
        );
      case 'user_stats':
        return [batch => batch.set(doc(db, this.p('user_stats', 'me')), { ...MOCK_USER_STATS })];
      case 'retos':
        return MOCK_RETOS.map(r =>
          batch => batch.set(doc(db, this.p('retos', r.id)), { ...r }),
        );
      case 'resultados':
        return MOCK_RESULTADOS.map(r =>
          batch => batch.set(doc(db, this.p('resultados', r.id)), { ...r }),
        );
      case 'calificaciones':
        return MOCK_CALIFICACIONES.map(c =>
          batch => batch.set(doc(db, this.p('calificaciones', c.id)), { ...c }),
        );
      default:
        return [];
    }
  }

  /**
   * Retries getDocFromServer up to maxAttempts times with exponential backoff.
   * Returns true if the document exists, false if it does not.
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
        const delay = 500 * 2 ** (attempt - 1);
        console.warn(`[FirestoreSeedService] Offline, retrying in ${delay}ms… (${attempt}/${maxAttempts})`);
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
    return false;
  }
}
