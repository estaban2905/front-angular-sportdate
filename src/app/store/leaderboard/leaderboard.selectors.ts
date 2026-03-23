// store/leaderboard/leaderboard.selectors.ts
import { Selector } from '@ngxs/store';
import { LeaderboardState } from './leaderboard.state';
import { LeaderboardStateModel } from './leaderboard.model';

export class LeaderboardSelectors {
  @Selector([LeaderboardState])
  static leaderboard(state: LeaderboardStateModel) {
    return state.leaderboard;
  }

  @Selector([LeaderboardState])
  static teams(state: LeaderboardStateModel) {
    return state.teams;
  }

  @Selector([LeaderboardState])
  static championships(state: LeaderboardStateModel) {
    return state.championships;
  }

  @Selector([LeaderboardState])
  static userRank(state: LeaderboardStateModel) {
    return state.userRank;
  }

  @Selector([LeaderboardState])
  static loading(state: LeaderboardStateModel) {
    return state.loading;
  }
}
