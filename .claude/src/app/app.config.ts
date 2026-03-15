import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideStore } from '@ngxs/store';
import { withNgxsReduxDevtoolsPlugin } from '@ngxs/devtools-plugin';
import { routes } from './app.routes';
import { STATES } from './store/state';
import { authInterceptor } from './interceptors/auth.interceptor';
import { InMemoryUserRepository } from './core/repositories/in-memory/in-memory-user.repository';
import { InMemoryEventRepository } from './core/repositories/in-memory/in-memory-event.repository';
import { InMemoryCommunityRepository } from './core/repositories/in-memory/in-memory-community.repository';
import { InMemoryLeaderboardRepository } from './core/repositories/in-memory/in-memory-leaderboard.repository';
import { UserRepository } from './core/repositories/abstractions/user.repository';
import { EventRepository } from './core/repositories/abstractions/event.repository';
import { CommunityRepository } from './core/repositories/abstractions/community.repository';
import { LeaderboardRepository } from './core/repositories/abstractions/leaderboard.repository';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideAnimationsAsync(),
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(withInterceptors([authInterceptor])),
    provideStore(STATES, withNgxsReduxDevtoolsPlugin()),

    // Repository bindings — swap for real HTTP repositories when endpoints are ready
    { provide: UserRepository,        useClass: InMemoryUserRepository },
    { provide: EventRepository,       useClass: InMemoryEventRepository },
    { provide: CommunityRepository,   useClass: InMemoryCommunityRepository },
    { provide: LeaderboardRepository, useClass: InMemoryLeaderboardRepository },
  ],
};
