// store/match/match.model.ts

import { Profile } from '@core/models';

export interface MatchStats {
  /** Number of matches accepted this week */
  weeklyMatches: number;
  /** Percentage of profiles accepted vs seen (0-100) */
  acceptanceRate: number;
  /** Sport with the highest compatibility */
  topSport: string;
}

export interface MatchStateModel {
  /** Index of the currently displayed profile in the profiles array */
  currentProfileIndex: number;
  /** Active sport filter label, e.g. 'Todos', '⚽ Fútbol' */
  activeFilter: string;
  /** Profiles the current user has accepted (matched) */
  matchHistory: Profile[];
  /** IDs of profiles that were skipped in the current session */
  skippedProfileIds: string[];
  matchStats: MatchStats | null;
  loading: boolean;
}
