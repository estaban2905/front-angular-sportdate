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
import { Observable } from 'rxjs';
import { collection, onSnapshot } from 'firebase/firestore';
import { FIRESTORE, DB_ROOT } from '../../firebase/firebase.provider';
import { EventRepository } from '../abstractions/event.repository';
import { SportEvent, Challenge } from '../../models';

@Injectable()
export class FirestoreEventRepository extends EventRepository {
  private readonly db = inject(FIRESTORE);

  getEvents(): Observable<SportEvent[]> {
    return new Observable<SportEvent[]>(observer => {
      const ref = collection(this.db, `${DB_ROOT}/events`);
      const unsubscribe = onSnapshot(
        ref,
        snapshot => {
          const events = snapshot.docs.map(d => ({ ...d.data() } as SportEvent));
          observer.next(events);
        },
        error => observer.error(error),
      );
      return () => unsubscribe();
    });
  }

  getChallenges(): Observable<Challenge[]> {
    return new Observable<Challenge[]>(observer => {
      const ref = collection(this.db, `${DB_ROOT}/challenges`);
      const unsubscribe = onSnapshot(
        ref,
        snapshot => {
          const challenges = snapshot.docs.map(d => ({ ...d.data() } as Challenge));
          observer.next(challenges);
        },
        error => observer.error(error),
      );
      return () => unsubscribe();
    });
  }
}
