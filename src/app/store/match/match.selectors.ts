// store/match/match.selectors.ts

import { Selector } from '@ngxs/store';
import { MatchState } from './match.state';
import { MatchStateModel, MatchStats } from './match.model';
import { Profile } from '@core/models';

export class MatchSelectors {
  @Selector([MatchState])
  static currentProfileIndex(state: MatchStateModel): number {
    return state.currentProfileIndex;
  }

  @Selector([MatchState])
  static activeFilter(state: MatchStateModel): string {
    return state.activeFilter;
  }

  @Selector([MatchState])
  static matchHistory(state: MatchStateModel): Profile[] {
    return state.matchHistory;
  }

  @Selector([MatchState])
  static matchCount(state: MatchStateModel): number {
    return state.matchHistory.length;
  }

  @Selector([MatchState])
  static skippedProfileIds(state: MatchStateModel): string[] {
    return state.skippedProfileIds;
  }

  @Selector([MatchState])
  static matchStats(state: MatchStateModel): MatchStats | null {
    return state.matchStats;
  }

  @Selector([MatchState])
  static loading(state: MatchStateModel): boolean {
    return state.loading;
  }
}
