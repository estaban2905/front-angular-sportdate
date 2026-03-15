/**
 * core/repositories/abstractions/user.repository.ts
 *
 * Abstract base class for the User repository.
 * Angular's DI system can inject concrete sub-classes when you provide them via
 * `{ provide: UserRepository, useClass: InMemoryUserRepository }`.
 *
 * All methods return Observables so that future HTTP implementations are
 * drop-in compatible without changing consumers.
 */

import { Observable } from 'rxjs';
import { Profile, UserStats, Achievement } from '../../models';

export abstract class UserRepository {
  /**
   * Returns the aggregated statistics for the currently logged-in user.
   */
  abstract getUserStats(): Observable<UserStats>;

  /**
   * Returns the list of discoverable athlete profiles for the match screen.
   */
  abstract getProfiles(): Observable<Profile[]>;

  /**
   * Returns all achievements, both locked and unlocked, for the current user.
   */
  abstract getAchievements(): Observable<Achievement[]>;
}
