// store/match/match.actions.ts

import { Profile } from '@core/models';
import { MatchStats } from './match.model';

export namespace MatchActions {
  /** Accept the current profile (creates a match). */
  export class AcceptProfile {
    static readonly type = '[Match] Accept Profile';
    constructor(public profile: Profile) {}
  }

  /** Skip the current profile (move to next). */
  export class SkipProfile {
    static readonly type = '[Match] Skip Profile';
    constructor(public profileId: string) {}
  }

  /** Change the active sport filter. */
  export class SetFilter {
    static readonly type = '[Match] Set Filter';
    constructor(public filter: string) {}
  }

  /** Reset the card stack back to index 0. */
  export class ResetStack {
    static readonly type = '[Match] Reset Stack';
  }

  /** Load global match statistics. */
  export class LoadMatchStats {
    static readonly type = '[Match] Load Match Stats';
  }

  export class LoadMatchStatsSuccess {
    static readonly type = '[Match] Load Match Stats Success';
    constructor(public stats: MatchStats) {}
  }
}
