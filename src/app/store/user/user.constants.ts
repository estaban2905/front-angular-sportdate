// store/user/user.constants.ts
// Default / initial values for the user state slice.

import { UserStateModel } from './user.model';

export const USER_STATE_DEFAULTS: UserStateModel = {
  userStats: null,
  profiles: [],
  achievements: [],
  weeklyActivity: [],
  recentActivity: [],
  loading: false,
};
