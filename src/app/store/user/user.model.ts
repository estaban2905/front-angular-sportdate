// store/user/user.model.ts
// State shape for the user feature slice.

import { Profile, UserStats, Achievement, WeeklyActivityDay, RecentActivityItem } from '@core/models';

export interface UserStateModel {
  userStats: UserStats | null;
  profiles: Profile[];
  achievements: Achievement[];
  weeklyActivity: WeeklyActivityDay[];
  recentActivity: RecentActivityItem[];
  loading: boolean;
}
