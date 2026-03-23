/**
 * core/repositories/abstractions/leaderboard.repository.ts
 *
 * Abstract base class for the Leaderboard repository.
 * Provides Observable-based access to ranking data.
 */

import { Observable } from 'rxjs';
import { LeaderboardEntry, TeamEntry, Championship } from '../../models';

export abstract class LeaderboardRepository {
  /**
   * Returns the global individual leaderboard entries sorted by rank.
   */
  abstract getLeaderboard(): Observable<LeaderboardEntry[]>;

  /**
   * Returns the team leaderboard entries.
   */
  abstract getTeams(): Observable<TeamEntry[]>;

  /**
   * Returns championship tournament data.
   */
  abstract getChampionships(): Observable<Championship[]>;

  /**
   * Returns the authenticated user's numeric rank in the global leaderboard.
   */
  abstract getUserRank(): Observable<number>;
}
