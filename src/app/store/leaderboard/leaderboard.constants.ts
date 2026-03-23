// store/leaderboard/leaderboard.constants.ts
import { LeaderboardStateModel } from './leaderboard.model';

export const LEADERBOARD_STATE_DEFAULTS: LeaderboardStateModel = {
  leaderboard: [],
  teams: [],
  championships: [],
  userRank: null,
  loading: false,
};
