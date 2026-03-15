// store/user/user.model.ts
// State shape for the user feature slice.

import { Profile, UserStats, Achievement } from '@core/models';

export interface UserStateModel {
  userStats: UserStats | null;
  profiles: Profile[];
  achievements: Achievement[];
  loading: boolean;
}
