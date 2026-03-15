// store/match/match.state.ts

import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { MatchStateModel } from './match.model';
import { MATCH_STATE_DEFAULTS } from './match.constants';
import { MatchActions } from './match.actions';

@State<MatchStateModel>({
  name: 'match',
  defaults: MATCH_STATE_DEFAULTS,
})
@Injectable()
export class MatchState {
  @Action(MatchActions.AcceptProfile)
  acceptProfile(
    ctx: StateContext<MatchStateModel>,
    { profile }: MatchActions.AcceptProfile,
  ) {
    const state = ctx.getState();
    ctx.patchState({
      matchHistory: [...state.matchHistory, profile],
      currentProfileIndex: state.currentProfileIndex + 1,
    });
  }

  @Action(MatchActions.SkipProfile)
  skipProfile(
    ctx: StateContext<MatchStateModel>,
    { profileId }: MatchActions.SkipProfile,
  ) {
    const state = ctx.getState();
    ctx.patchState({
      skippedProfileIds: [...state.skippedProfileIds, profileId],
      currentProfileIndex: state.currentProfileIndex + 1,
    });
  }

  @Action(MatchActions.SetFilter)
  setFilter(
    ctx: StateContext<MatchStateModel>,
    { filter }: MatchActions.SetFilter,
  ) {
    ctx.patchState({ activeFilter: filter, currentProfileIndex: 0 });
  }

  @Action(MatchActions.ResetStack)
  resetStack(ctx: StateContext<MatchStateModel>) {
    ctx.patchState({
      currentProfileIndex: 0,
      skippedProfileIds: [],
    });
  }

  @Action(MatchActions.LoadMatchStatsSuccess)
  loadMatchStatsSuccess(
    ctx: StateContext<MatchStateModel>,
    { stats }: MatchActions.LoadMatchStatsSuccess,
  ) {
    ctx.patchState({ matchStats: stats, loading: false });
  }
}
