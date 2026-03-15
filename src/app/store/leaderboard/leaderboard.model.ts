// store/leaderboard/leaderboard.model.ts
import { LeaderboardEntry, TeamEntry, Championship } from '@core/models';

export interface LeaderboardStateModel {
  leaderboard: LeaderboardEntry[];
  teams: TeamEntry[];
  championships: Championship[];
  loading: boolean;
}
