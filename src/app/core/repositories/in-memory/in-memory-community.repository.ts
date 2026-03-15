/**
 * core/repositories/in-memory/in-memory-community.repository.ts
 *
 * In-memory implementation of CommunityRepository.
 * Simulates async HTTP behaviour with of() + delay(300).
 */

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { CommunityRepository } from '../abstractions/community.repository';
import { Group, Community } from '../../models';
import { MOCK_GROUPS, MOCK_COMMUNITIES } from './mock-data';

@Injectable()
export class InMemoryCommunityRepository extends CommunityRepository {
  /** Returns mock Group list after a simulated 300 ms network delay. */
  getGroups(): Observable<Group[]> {
    return of(MOCK_GROUPS).pipe(delay(300));
  }

  /** Returns mock Community list after a simulated 300 ms network delay. */
  getCommunities(): Observable<Community[]> {
    return of(MOCK_COMMUNITIES).pipe(delay(300));
  }
}
