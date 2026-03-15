// store/communities/communities.constants.ts

import { CommunitiesStateModel } from './communities.model';

export const COMMUNITIES_STATE_DEFAULTS: CommunitiesStateModel = {
  groups: [],
  communities: [],
  joinedCommunityIds: [],
  searchQuery: '',
  activeTab: 'explorar',
  loading: false,
};
