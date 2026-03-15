// store/user/user.selectors.ts
// Pure selector functions for the user state slice.

import { Selector } from '@ngxs/store';
import { UserState } from './user.state';
import { UserStateModel } from './user.model';

export class UserSelectors {
  @Selector([UserState])
  static userStats(state: UserStateModel) {
    return state.userStats;
  }

  @Selector([UserState])
  static profiles(state: UserStateModel) {
    return state.profiles;
  }

  @Selector([UserState])
  static achievements(state: UserStateModel) {
    return state.achievements;
  }

  @Selector([UserState])
  static loading(state: UserStateModel) {
    return state.loading;
  }

  @Selector([UserState])
  static unlockedCount(state: UserStateModel) {
    return state.achievements.filter(a => !!a.unlockedAt).length;
  }
}
