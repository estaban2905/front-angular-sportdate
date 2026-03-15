// store/communities/communities.model.ts

import { Group, Community } from '@core/models';

export interface CommunitiesStateModel {
  groups: Group[];
  communities: Community[];
  joinedCommunityIds: string[];
  searchQuery: string;
  activeTab: string;
  loading: boolean;
}
