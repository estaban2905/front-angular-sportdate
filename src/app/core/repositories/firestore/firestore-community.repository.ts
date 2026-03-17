/**
 * core/repositories/firestore/firestore-community.repository.ts
 *
 * Firestore implementation of CommunityRepository.
 *
 * Path: SPORTDATE/main/
 *   - groups/{id}      → Group documents
 *   - communities/{id} → Community documents
 */

import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { collection, onSnapshot } from 'firebase/firestore';
import { FIRESTORE, DB_ROOT } from '../../firebase/firebase.provider';
import { CommunityRepository } from '../abstractions/community.repository';
import { Group, Community } from '../../models';

@Injectable()
export class FirestoreCommunityRepository extends CommunityRepository {
  private readonly db = inject(FIRESTORE);
  private readonly dbRoot = inject(DB_ROOT);

  getGroups(): Observable<Group[]> {
    return new Observable<Group[]>(observer => {
      const ref = collection(this.db, `${this.dbRoot}/groups`);
      const unsubscribe = onSnapshot(
        ref,
        snapshot => {
          const groups = snapshot.docs.map(d => ({ ...d.data() } as Group));
          observer.next(groups);
        },
        error => observer.error(error),
      );
      return () => unsubscribe();
    });
  }

  getCommunities(): Observable<Community[]> {
    return new Observable<Community[]>(observer => {
      const ref = collection(this.db, `${this.dbRoot}/communities`);
      const unsubscribe = onSnapshot(
        ref,
        snapshot => {
          const communities = snapshot.docs.map(d => ({ ...d.data() } as Community));
          observer.next(communities);
        },
        error => observer.error(error),
      );
      return () => unsubscribe();
    });
  }
}
