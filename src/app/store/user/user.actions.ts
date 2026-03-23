// store/user/user.actions.ts

import { Profile, UserStats, Achievement, WeeklyActivityDay, RecentActivityItem } from '@core/models';

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

  export class LoadWeeklyActivity {
    static readonly type = '[User] Load Weekly Activity';
  }

  export class LoadWeeklyActivitySuccess {
    static readonly type = '[User] Load Weekly Activity Success';
    constructor(public days: WeeklyActivityDay[]) {}
  }

  export class LoadRecentActivity {
    static readonly type = '[User] Load Recent Activity';
  }

  export class LoadRecentActivitySuccess {
    static readonly type = '[User] Load Recent Activity Success';
    constructor(public items: RecentActivityItem[]) {}
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
