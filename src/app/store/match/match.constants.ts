// store/match/match.constants.ts

import { MatchStateModel } from './match.model';

export const MATCH_STATE_DEFAULTS: MatchStateModel = {
  currentProfileIndex: 0,
  activeFilter: 'Todos',
  matchHistory: [],
  skippedProfileIds: [],
  matchStats: null,
  loading: false,
};
