/**
 * core/repositories/firestore/firestore-user.repository.ts
 *
 * Firestore implementation of UserRepository.
 *
 *   - user_stats/me     → single document with UserStats fields
 *   - profiles/{id}     → Profile documents
 *   - achievements/{id} → Achievement documents
 */

import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { collection, doc, onSnapshot } from 'firebase/firestore';
import { FIRESTORE, DB_ROOT } from '../../firebase/firebase.provider';
import { UserRepository } from '../abstractions/user.repository';
import { Profile, UserStats, Achievement } from '../../models';

@Injectable()
export class FirestoreUserRepository extends UserRepository {
  private readonly db = inject(FIRESTORE);
  private readonly dbRoot = inject(DB_ROOT);

  getUserStats(): Observable<UserStats> {
    return new Observable<UserStats>(observer => {
      const ref = doc(this.db, `${this.dbRoot}/user_stats/me`);
      const unsubscribe = onSnapshot(
        ref,
        snapshot => {
          if (snapshot.exists()) {
            observer.next(snapshot.data() as UserStats);
          } else {
            observer.error(new Error('user_stats/me document not found'));
          }
        },
        error => observer.error(error),
      );
      return () => unsubscribe();
    });
  }

  getProfiles(): Observable<Profile[]> {
    return new Observable<Profile[]>(observer => {
      const ref = collection(this.db, `${this.dbRoot}/profiles`);
      const unsubscribe = onSnapshot(
        ref,
        snapshot => {
          const profiles = snapshot.docs.map(d => ({ ...d.data() } as Profile));
          observer.next(profiles);
        },
        error => observer.error(error),
      );
      return () => unsubscribe();
    });
  }

  getAchievements(): Observable<Achievement[]> {
    return new Observable<Achievement[]>(observer => {
      const ref = collection(this.db, `${this.dbRoot}/achievements`);
      const unsubscribe = onSnapshot(
        ref,
        snapshot => {
          const achievements = snapshot.docs.map(d => ({ ...d.data() } as Achievement));
          observer.next(achievements);
        },
        error => observer.error(error),
      );
      return () => unsubscribe();
    });
  }
}
