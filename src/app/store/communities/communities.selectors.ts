// store/communities/communities.selectors.ts

import { Selector } from '@ngxs/store';
import { CommunitiesState } from './communities.state';
import { CommunitiesStateModel } from './communities.model';
import { Community, Group } from '@core/models';

export class CommunitiesSelectors {
  @Selector([CommunitiesState])
  static groups(state: CommunitiesStateModel): Group[] {
    return state.groups;
  }

  @Selector([CommunitiesState])
  static communities(state: CommunitiesStateModel): Community[] {
    return state.communities;
  }

  @Selector([CommunitiesState])
  static filteredCommunities(state: CommunitiesStateModel): Community[] {
    const q = state.searchQuery.toLowerCase().trim();
    if (!q) return state.communities;
    return state.communities.filter(c =>
      c.name.toLowerCase().includes(q) ||
      c.tags.some(t => t.toLowerCase().includes(q)),
    );
  }

  @Selector([CommunitiesState])
  static joinedCommunityIds(state: CommunitiesStateModel): string[] {
    return state.joinedCommunityIds;
  }

  @Selector([CommunitiesState])
  static myCommunities(state: CommunitiesStateModel): Community[] {
    return state.communities.filter(c =>
      state.joinedCommunityIds.includes(c.id),
    );
  }

  @Selector([CommunitiesState])
  static searchQuery(state: CommunitiesStateModel): string {
    return state.searchQuery;
  }

  @Selector([CommunitiesState])
  static activeTab(state: CommunitiesStateModel): string {
    return state.activeTab;
  }

  @Selector([CommunitiesState])
  static loading(state: CommunitiesStateModel): boolean {
    return state.loading;
  }
}
