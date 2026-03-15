import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { withNgxsReduxDevtoolsPlugin } from '@ngxs/devtools-plugin';
import { provideStore } from '@ngxs/store';

import { routes } from './app.routes';
import { UserState } from '@store/user';
import { EventsState } from '@store/events';
import { LeaderboardState } from '@store/leaderboard';
import { CommunitiesState } from '@store/communities';
import { ChatState } from '@store/chat';
import { MatchState } from '@store/match';
import { UserRepository } from '@core/repositories/abstractions/user.repository';
import { EventRepository } from '@core/repositories/abstractions/event.repository';
import { LeaderboardRepository } from '@core/repositories/abstractions/leaderboard.repository';
import { CommunityRepository } from '@core/repositories/abstractions/community.repository';
import { ChatRepository } from '@core/repositories/abstractions/chat.repository';
import { InMemoryUserRepository } from '@core/repositories/in-memory/in-memory-user.repository';
import { InMemoryEventRepository } from '@core/repositories/in-memory/in-memory-event.repository';
import { InMemoryLeaderboardRepository } from '@core/repositories/in-memory/in-memory-leaderboard.repository';
import { InMemoryCommunityRepository } from '@core/repositories/in-memory/in-memory-community.repository';
import { InMemoryChatRepository } from '@core/repositories/in-memory/in-memory-chat.repository';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimations(),
    provideStore(
      [UserState, EventsState, LeaderboardState, CommunitiesState, ChatState, MatchState],
      withNgxsReduxDevtoolsPlugin(),
    ),
    { provide: UserRepository, useClass: InMemoryUserRepository },
    { provide: EventRepository, useClass: InMemoryEventRepository },
    { provide: LeaderboardRepository, useClass: InMemoryLeaderboardRepository },
    { provide: CommunityRepository, useClass: InMemoryCommunityRepository },
    { provide: ChatRepository, useClass: InMemoryChatRepository },
  ],
};
