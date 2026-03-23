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
import { Profile, UserStats, Achievement, WeeklyActivityDay, RecentActivityItem } from '../../models';

export abstract class UserRepository {
  abstract getUserStats(): Observable<UserStats>;
  abstract getProfiles(): Observable<Profile[]>;
  abstract getAchievements(): Observable<Achievement[]>;
  abstract getWeeklyActivity(): Observable<WeeklyActivityDay[]>;
  abstract getRecentActivity(): Observable<RecentActivityItem[]>;
}
