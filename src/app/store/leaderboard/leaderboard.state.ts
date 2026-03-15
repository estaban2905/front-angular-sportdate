// store/leaderboard/leaderboard.state.ts
import { inject, Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { LeaderboardRepository } from '@core/repositories/abstractions/leaderboard.repository';
import { LeaderboardStateModel } from './leaderboard.model';
import { LEADERBOARD_STATE_DEFAULTS } from './leaderboard.constants';
import { LeaderboardActions } from './leaderboard.actions';

@State<LeaderboardStateModel>({
  name: 'leaderboard',
  defaults: LEADERBOARD_STATE_DEFAULTS,
})
@Injectable()
export class LeaderboardState {
  private readonly repo = inject(LeaderboardRepository);

  @Action(LeaderboardActions.LoadLeaderboard)
  loadLeaderboard(ctx: StateContext<LeaderboardStateModel>) {
    ctx.patchState({ loading: true });
    return this.repo.getLeaderboard().pipe(
      tap({
        next: leaderboard => ctx.patchState({ leaderboard, loading: false }),
        error: () => ctx.patchState({ loading: false }),
      }),
    );
  }

  @Action(LeaderboardActions.LoadTeams)
  loadTeams(ctx: StateContext<LeaderboardStateModel>) {
    return this.repo.getTeams().pipe(
      tap({ next: teams => ctx.patchState({ teams }) }),
    );
  }

  @Action(LeaderboardActions.LoadChampionships)
  loadChampionships(ctx: StateContext<LeaderboardStateModel>) {
    return this.repo.getChampionships().pipe(
      tap({ next: championships => ctx.patchState({ championships }) }),
    );
  }
}
