// store/communities/communities.state.ts

import { inject, Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { CommunityRepository } from '@core/repositories/abstractions/community.repository';
import { CommunitiesStateModel } from './communities.model';
import { COMMUNITIES_STATE_DEFAULTS } from './communities.constants';
import { CommunitiesActions } from './communities.actions';

@State<CommunitiesStateModel>({
  name: 'communities',
  defaults: COMMUNITIES_STATE_DEFAULTS,
})
@Injectable()
export class CommunitiesState {
  private readonly repo = inject(CommunityRepository);

  @Action(CommunitiesActions.LoadGroups)
  loadGroups(ctx: StateContext<CommunitiesStateModel>) {
    ctx.patchState({ loading: true });
    return this.repo.getGroups().pipe(
      tap({
        next: groups => ctx.patchState({ groups, loading: false }),
        error: () => ctx.patchState({ loading: false }),
      }),
    );
  }

  @Action(CommunitiesActions.LoadCommunities)
  loadCommunities(ctx: StateContext<CommunitiesStateModel>) {
    return this.repo.getCommunities().pipe(
      tap({ next: communities => ctx.patchState({ communities }) }),
    );
  }

  @Action(CommunitiesActions.JoinCommunity)
  joinCommunity(
    ctx: StateContext<CommunitiesStateModel>,
    { communityId }: CommunitiesActions.JoinCommunity,
  ) {
    const { joinedCommunityIds } = ctx.getState();
    if (joinedCommunityIds.includes(communityId)) return;
    ctx.patchState({ joinedCommunityIds: [...joinedCommunityIds, communityId] });
  }

  @Action(CommunitiesActions.LeaveCommunity)
  leaveCommunity(
    ctx: StateContext<CommunitiesStateModel>,
    { communityId }: CommunitiesActions.LeaveCommunity,
  ) {
    ctx.patchState({
      joinedCommunityIds: ctx.getState().joinedCommunityIds.filter(id => id !== communityId),
    });
  }

  @Action(CommunitiesActions.SetSearchQuery)
  setSearchQuery(
    ctx: StateContext<CommunitiesStateModel>,
    { query }: CommunitiesActions.SetSearchQuery,
  ) {
    ctx.patchState({ searchQuery: query });
  }

  @Action(CommunitiesActions.SetActiveTab)
  setActiveTab(
    ctx: StateContext<CommunitiesStateModel>,
    { tab }: CommunitiesActions.SetActiveTab,
  ) {
    ctx.patchState({ activeTab: tab });
  }
}
