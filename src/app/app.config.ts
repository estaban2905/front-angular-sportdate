import { ApplicationConfig, provideZoneChangeDetection, provideAppInitializer, inject } from '@angular/core';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from '@core/interceptors/auth.interceptor';
import { provideRouter, withHashLocation } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { withNgxsReduxDevtoolsPlugin } from '@ngxs/devtools-plugin';
import { provideStore, Store } from '@ngxs/store';
import { take } from 'rxjs/operators';

import { routes } from './app.routes';
import { AuthService } from '@core/services/auth.service';
import { AuthActions, AuthState } from '@store/auth';
import { UserState } from '@store/user';
import { EventsState } from '@store/events';
import { LeaderboardState } from '@store/leaderboard';
import { CommunitiesState } from '@store/communities';
import { ChatState } from '@store/chat';
import { MatchState } from '@store/match';
import { DescubrirState } from '@store/descubrir';
import { UserRepository } from '@core/repositories/abstractions/user.repository';
import { EventRepository } from '@core/repositories/abstractions/event.repository';
import { LeaderboardRepository } from '@core/repositories/abstractions/leaderboard.repository';
import { CommunityRepository } from '@core/repositories/abstractions/community.repository';
import { ChatRepository } from '@core/repositories/abstractions/chat.repository';
import { DescubrirRepository } from '@core/repositories/abstractions/descubrir.repository';
import { HttpUserRepository } from '@core/repositories/http/http-user.repository';
import { HttpEventRepository } from '@core/repositories/http/http-event.repository';
import { HttpLeaderboardRepository } from '@core/repositories/http/http-leaderboard.repository';
import { HttpCommunityRepository } from '@core/repositories/http/http-community.repository';
import { HttpChatRepository } from '@core/repositories/http/http-chat.repository';
import { HttpDescubrirRepository } from '@core/repositories/http/http-descubrir.repository';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withHashLocation()),
    provideAnimationsAsync(),
    provideHttpClient(withInterceptors([authInterceptor])),
    provideStore(
      [AuthState, UserState, EventsState, LeaderboardState, CommunitiesState, ChatState, MatchState, DescubrirState],
      withNgxsReduxDevtoolsPlugin(),
    ),

    /**
     * Resolves the HTTP auth session BEFORE the router runs any guards.
     * Without this, on page refresh the store has user=null when guards execute,
     * causing a redirect to /login even for authenticated users.
     */
    provideAppInitializer(() => {
      const authService = inject(AuthService);
      const store = inject(Store);
      return new Promise<void>(resolve => {
        authService.authState$.pipe(take(1)).subscribe({
          next: user => {
            store.dispatch(new AuthActions.SetUser(user)).subscribe(() => resolve());
          },
          error: () => resolve(),
        });
      });
    }),

    { provide: UserRepository, useClass: HttpUserRepository },
    { provide: EventRepository, useClass: HttpEventRepository },
    { provide: LeaderboardRepository, useClass: HttpLeaderboardRepository },
    { provide: CommunityRepository, useClass: HttpCommunityRepository },
    { provide: ChatRepository, useClass: HttpChatRepository },
    { provide: DescubrirRepository, useClass: HttpDescubrirRepository },
  ],
};
