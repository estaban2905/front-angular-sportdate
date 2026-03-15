/**
 * core/repositories/firestore/firestore-leaderboard.repository.ts
 *
 * Firestore implementation of LeaderboardRepository.
 *
 * Path: SPORTDATE/main/
 *   - leaderboard/{id}   → LeaderboardEntry documents (ordered by rank)
 *   - teams/{id}         → TeamEntry documents
 *   - championships/{id} → Championship documents
 */

import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { FIRESTORE, DB_ROOT } from '../../firebase/firebase.provider';
import { LeaderboardRepository } from '../abstractions/leaderboard.repository';
import { LeaderboardEntry, TeamEntry, Championship } from '../../models';

@Injectable()
export class FirestoreLeaderboardRepository extends LeaderboardRepository {
  private readonly db = inject(FIRESTORE);

  getLeaderboard(): Observable<LeaderboardEntry[]> {
    return new Observable<LeaderboardEntry[]>(observer => {
      const ref = query(collection(this.db, `${DB_ROOT}/leaderboard`), orderBy('rank', 'asc'));
      const unsubscribe = onSnapshot(
        ref,
        snapshot => {
          const entries = snapshot.docs.map(d => ({ ...d.data() } as LeaderboardEntry));
          observer.next(entries);
        },
        error => observer.error(error),
      );
      return () => unsubscribe();
    });
  }

  getTeams(): Observable<TeamEntry[]> {
    return new Observable<TeamEntry[]>(observer => {
      const ref = collection(this.db, `${DB_ROOT}/teams`);
      const unsubscribe = onSnapshot(
        ref,
        snapshot => {
          const teams = snapshot.docs.map(d => ({ ...d.data() } as TeamEntry));
          observer.next(teams);
        },
        error => observer.error(error),
      );
      return () => unsubscribe();
    });
  }

  getChampionships(): Observable<Championship[]> {
    return new Observable<Championship[]>(observer => {
      const ref = collection(this.db, `${DB_ROOT}/championships`);
      const unsubscribe = onSnapshot(
        ref,
        snapshot => {
          const championships = snapshot.docs.map(d => ({ ...d.data() } as Championship));
          observer.next(championships);
        },
        error => observer.error(error),
      );
      return () => unsubscribe();
    });
  }
}
