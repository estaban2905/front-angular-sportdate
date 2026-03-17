/**
 * core/repositories/firestore/firestore-event.repository.ts
 *
 * Firestore implementation of EventRepository.
 *
 * Path: SPORTDATE/main/
 *   - events/{id}     → SportEvent documents
 *   - challenges/{id} → Challenge documents
 */

import { Injectable, inject } from '@angular/core';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { collection, doc, onSnapshot, addDoc, updateDoc, runTransaction, increment, arrayUnion, arrayRemove } from 'firebase/firestore';
import { FIRESTORE, DB_ROOT } from '../../firebase/firebase.provider';
import { EventRepository } from '../abstractions/event.repository';
import { SportEvent, Challenge, Attendance } from '../../models';

@Injectable()
export class FirestoreEventRepository extends EventRepository {
  private readonly db = inject(FIRESTORE);
  private readonly dbRoot = inject(DB_ROOT);

  getEvents(): Observable<SportEvent[]> {
    return new Observable<SportEvent[]>(observer => {
      const ref = collection(this.db, `${this.dbRoot}/events`);
      const unsubscribe = onSnapshot(
        ref,
        snapshot => {
          const events = snapshot.docs.map(d => ({ id: d.id, ...d.data() } as SportEvent));
          observer.next(events);
        },
        error => observer.error(error),
      );
      return () => unsubscribe();
    });
  }

  getChallenges(): Observable<Challenge[]> {
    return new Observable<Challenge[]>(observer => {
      const ref = collection(this.db, `${this.dbRoot}/challenges`);
      const unsubscribe = onSnapshot(
        ref,
        snapshot => {
          const challenges = snapshot.docs.map(d => ({ id: d.id, ...d.data() } as Challenge));
          observer.next(challenges);
        },
        error => observer.error(error),
      );
      return () => unsubscribe();
    });
  }

  createEvent(event: Omit<SportEvent, 'id'>): Observable<SportEvent> {
    const ref = collection(this.db, `${this.dbRoot}/events`);
    return from(addDoc(ref, event)).pipe(
      map(docRef => ({ ...event, id: docRef.id } as SportEvent)),
    );
  }

  getEventById(eventId: string): Observable<SportEvent | null> {
    return new Observable<SportEvent | null>(observer => {
      const ref = doc(this.db, `${this.dbRoot}/events/${eventId}`);
      const unsubscribe = onSnapshot(
        ref,
        snap => observer.next(snap.exists() ? ({ id: snap.id, ...snap.data() } as SportEvent) : null),
        error => observer.error(error),
      );
      return () => unsubscribe();
    });
  }

  joinEvent(
    eventId: string,
    userId: string,
    profile?: { displayName?: string | null; photoURL?: string | null; distanceKm?: number },
  ): Observable<void> {
    const eventRef = doc(this.db, `${this.dbRoot}/events/${eventId}`);
    const attendanceRef = doc(this.db, `${this.dbRoot}/events/${eventId}/attendances/${userId}`);
    const attendanceData: Record<string, unknown> = {
      userId,
      status: 'confirmed',
      joinedAt: new Date().toISOString(),
      ...(profile?.displayName != null ? { displayName: profile.displayName } : {}),
      ...(profile?.photoURL != null ? { photoURL: profile.photoURL } : {}),
      ...(profile?.distanceKm != null ? { distanceKm: profile.distanceKm } : {}),
    };
    return from(
      runTransaction(this.db, async tx => {
        const snap = await tx.get(eventRef);
        if (!snap.exists()) return;
        const participantIds: string[] = snap.data()['participantIds'] ?? [];
        // Idempotency guard: skip if already joined (prevents double-increment).
        if (participantIds.includes(userId)) return;
        tx.update(eventRef, { participants: increment(1), participantIds: arrayUnion(userId) });
        tx.set(attendanceRef, attendanceData);
      }),
    ).pipe(map(() => undefined));
  }

  leaveEvent(eventId: string, userId: string): Observable<void> {
    const eventRef = doc(this.db, `${this.dbRoot}/events/${eventId}`);
    const attendanceRef = doc(this.db, `${this.dbRoot}/events/${eventId}/attendances/${userId}`);
    return from(
      Promise.all([
        updateDoc(eventRef, { participants: increment(-1), participantIds: arrayRemove(userId) }),
        updateDoc(attendanceRef, { status: 'cancelled' }),
      ]),
    ).pipe(map(() => undefined));
  }

  getAttendances(eventId: string): Observable<Attendance[]> {
    return new Observable<Attendance[]>(observer => {
      const ref = collection(this.db, `${this.dbRoot}/events/${eventId}/attendances`);
      const unsubscribe = onSnapshot(
        ref,
        snap => observer.next(snap.docs.map(d => d.data() as Attendance)),
        error => observer.error(error),
      );
      return () => unsubscribe();
    });
  }
}
