/**
 * core/repositories/in-memory/in-memory-user.repository.ts
 *
 * In-memory implementation of UserRepository.
 * Uses `of()` + `delay(300)` to simulate realistic HTTP latency,
 * making it easy to swap for a real HttpClient-based implementation later.
 */

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { UserRepository } from '../abstractions/user.repository';
import { Profile, UserStats, Achievement } from '../../models';
import { MOCK_PROFILES, MOCK_USER_STATS, MOCK_ACHIEVEMENTS } from './mock-data';

@Injectable()
export class InMemoryUserRepository extends UserRepository {
  /** Returns mock UserStats after a simulated 300 ms network delay. */
  getUserStats(): Observable<UserStats> {
    return of(MOCK_USER_STATS).pipe(delay(300));
  }

  /** Returns mock Profile list after a simulated 300 ms network delay. */
  getProfiles(): Observable<Profile[]> {
    return of(MOCK_PROFILES).pipe(delay(300));
  }

  /** Returns mock Achievement list after a simulated 300 ms network delay. */
  getAchievements(): Observable<Achievement[]> {
    return of(MOCK_ACHIEVEMENTS).pipe(delay(300));
  }
}
