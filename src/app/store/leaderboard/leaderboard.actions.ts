// store/leaderboard/leaderboard.actions.ts
import { LeaderboardEntry, TeamEntry, Championship } from '@core/models';

export namespace LeaderboardActions {
  export class LoadLeaderboard {
    static readonly type = '[Leaderboard] Load Leaderboard';
  }

  export class LoadLeaderboardSuccess {
    static readonly type = '[Leaderboard] Load Leaderboard Success';
    constructor(public entries: LeaderboardEntry[]) {}
  }

  export class LoadTeams {
    static readonly type = '[Leaderboard] Load Teams';
  }

  export class LoadTeamsSuccess {
    static readonly type = '[Leaderboard] Load Teams Success';
    constructor(public teams: TeamEntry[]) {}
  }

  export class LoadChampionships {
    static readonly type = '[Leaderboard] Load Championships';
  }

  export class LoadChampionshipsSuccess {
    static readonly type = '[Leaderboard] Load Championships Success';
    constructor(public championships: Championship[]) {}
  }
}
