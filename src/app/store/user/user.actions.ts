// store/user/user.actions.ts

import { Profile, UserStats, Achievement } from '@core/models';

export namespace UserActions {
  export class LoadUserStats {
    static readonly type = '[User] Load User Stats';
  }

  export class LoadUserStatsSuccess {
    static readonly type = '[User] Load User Stats Success';
    constructor(public stats: UserStats) {}
  }

  export class LoadProfiles {
    static readonly type = '[User] Load Profiles';
  }

  export class LoadProfilesSuccess {
    static readonly type = '[User] Load Profiles Success';
    constructor(public profiles: Profile[]) {}
  }

  export class LoadAchievements {
    static readonly type = '[User] Load Achievements';
  }

  export class LoadAchievementsSuccess {
    static readonly type = '[User] Load Achievements Success';
    constructor(public achievements: Achievement[]) {}
  }

  /** Partially update the logged-in user's stats (e.g. after completing a challenge). */
  export class UpdateUserStats {
    static readonly type = '[User] Update User Stats';
    constructor(public partial: Partial<UserStats>) {}
  }

  /** Update the currently viewed profile filter (used by profile edit flow). */
  export class SetActiveProfileIndex {
    static readonly type = '[User] Set Active Profile Index';
    constructor(public index: number) {}
  }

  /**
   * Loads user stats and achievements concurrently via LoadUserDataUseCase.
   * Prefer this over dispatching LoadUserStats + LoadAchievements separately
   * when both are needed at the same time (e.g., Dashboard, Perfil).
   */
  export class LoadUserData {
    static readonly type = '[User] Load User Data';
  }
}
