/**
 * core/use-cases/user/load-user-data.use-case.ts
 *
 * Orchestrates loading the user's profile data — stats and achievements —
 * in parallel using forkJoin. This combination is needed by both the Dashboard
 * and the Perfil page.
 *
 * Moving this cross-repo orchestration out of the State keeps the State
 * focused on managing state shape, while business-level data loading lives here.
 *
 * SRP: only responsible for loading and combining user profile data.
 * DIP: depends on UserRepository abstraction.
 */

import { Injectable, inject } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { UserRepository } from '@core/repositories/abstractions/user.repository';
import { UserStats, Achievement } from '@core/models';

export interface UserData {
  userStats: UserStats;
  achievements: Achievement[];
}

@Injectable({ providedIn: 'root' })
export class LoadUserDataUseCase {
  private readonly userRepo = inject(UserRepository);

  /**
   * Loads user stats and achievements concurrently.
   * Both requests are fired simultaneously; the result emits when both complete.
   */
  execute(): Observable<UserData> {
    return forkJoin({
      userStats: this.userRepo.getUserStats(),
      achievements: this.userRepo.getAchievements(),
    });
  }
}
