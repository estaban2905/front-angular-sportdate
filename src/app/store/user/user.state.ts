// store/user/user.state.ts
// NGXS state class for user stats, profiles, and achievements.

import { inject, Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { UserRepository } from '@core/repositories/abstractions/user.repository';
import { LoadUserDataUseCase } from '@core/use-cases/user/load-user-data.use-case';
import { UserStateModel } from './user.model';
import { USER_STATE_DEFAULTS } from './user.constants';
import { UserActions } from './user.actions';

@State<UserStateModel>({
  name: 'user',
  defaults: USER_STATE_DEFAULTS,
})
@Injectable()
export class UserState {
  private readonly repo = inject(UserRepository);
  private readonly loadUserDataUseCase = inject(LoadUserDataUseCase);

  /**
   * Loads stats and achievements concurrently via the use case.
   * Use this action when both are needed (Dashboard, Perfil).
   */
  @Action(UserActions.LoadUserData)
  loadUserData(ctx: StateContext<UserStateModel>) {
    ctx.patchState({ loading: true });
    return this.loadUserDataUseCase.execute().pipe(
      tap({
        next: ({ userStats, achievements }) =>
          ctx.patchState({ userStats, achievements, loading: false }),
        error: () => ctx.patchState({ loading: false }),
      }),
    );
  }

  @Action(UserActions.LoadUserStats)
  loadUserStats(ctx: StateContext<UserStateModel>) {
    ctx.patchState({ loading: true });
    return this.repo.getUserStats().pipe(
      tap({
        next: userStats => ctx.patchState({ userStats, loading: false }),
        error: () => ctx.patchState({ loading: false }),
      }),
    );
  }

  @Action(UserActions.LoadProfiles)
  loadProfiles(ctx: StateContext<UserStateModel>) {
    return this.repo.getProfiles().pipe(
      tap({ next: profiles => ctx.patchState({ profiles }) }),
    );
  }

  @Action(UserActions.LoadAchievements)
  loadAchievements(ctx: StateContext<UserStateModel>) {
    return this.repo.getAchievements().pipe(
      tap({ next: achievements => ctx.patchState({ achievements }) }),
    );
  }

  @Action(UserActions.UpdateUserStats)
  updateUserStats(
    ctx: StateContext<UserStateModel>,
    { partial }: UserActions.UpdateUserStats,
  ) {
    const current = ctx.getState().userStats;
    if (!current) return;
    ctx.patchState({ userStats: { ...current, ...partial } });
  }
}
