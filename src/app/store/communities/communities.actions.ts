// store/communities/communities.actions.ts

import { Group, Community } from '@core/models';

export namespace CommunitiesActions {
  export class LoadGroups {
    static readonly type = '[Communities] Load Groups';
  }

  export class LoadGroupsSuccess {
    static readonly type = '[Communities] Load Groups Success';
    constructor(public groups: Group[]) {}
  }

  export class LoadCommunities {
    static readonly type = '[Communities] Load Communities';
  }

  export class LoadCommunitiesSuccess {
    static readonly type = '[Communities] Load Communities Success';
    constructor(public communities: Community[]) {}
  }

  export class JoinCommunity {
    static readonly type = '[Communities] Join Community';
    constructor(public communityId: string) {}
  }

  export class LeaveCommunity {
    static readonly type = '[Communities] Leave Community';
    constructor(public communityId: string) {}
  }

  export class SetSearchQuery {
    static readonly type = '[Communities] Set Search Query';
    constructor(public query: string) {}
  }

  export class SetActiveTab {
    static readonly type = '[Communities] Set Active Tab';
    constructor(public tab: string) {}
  }
}
