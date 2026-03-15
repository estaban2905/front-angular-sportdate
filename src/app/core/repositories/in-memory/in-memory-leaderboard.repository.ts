/**
 * core/repositories/in-memory/in-memory-leaderboard.repository.ts
 *
 * In-memory implementation of LeaderboardRepository.
 * Simulates async HTTP behaviour with of() + delay(300).
 */

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { LeaderboardRepository } from '../abstractions/leaderboard.repository';
import { LeaderboardEntry, TeamEntry, Championship } from '../../models';
import { MOCK_LEADERBOARD, MOCK_TEAMS, MOCK_CHAMPIONSHIPS } from './mock-data';

@Injectable()
export class InMemoryLeaderboardRepository extends LeaderboardRepository {
  /** Returns mock LeaderboardEntry list after a simulated 300 ms network delay. */
  getLeaderboard(): Observable<LeaderboardEntry[]> {
    return of(MOCK_LEADERBOARD).pipe(delay(300));
  }

  /** Returns mock TeamEntry list after a simulated 300 ms network delay. */
  getTeams(): Observable<TeamEntry[]> {
    return of(MOCK_TEAMS).pipe(delay(300));
  }

  /** Returns mock Championship list after a simulated 300 ms network delay. */
  getChampionships(): Observable<Championship[]> {
    return of(MOCK_CHAMPIONSHIPS).pipe(delay(300));
  }
}
