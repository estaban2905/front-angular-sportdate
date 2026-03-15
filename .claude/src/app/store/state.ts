// store/state.ts
// Root barrel — exports the STATES array consumed by provideStore() in app.config.ts.

import { UserState } from './user/user.state';
import { EventsState } from './events/events.state';
import { CommunitiesState } from './communities/communities.state';
import { LeaderboardState } from './leaderboard/leaderboard.state';

export const STATES = [UserState, EventsState, CommunitiesState, LeaderboardState];

export * from './user';
export * from './events';
export * from './communities';
export * from './leaderboard';
