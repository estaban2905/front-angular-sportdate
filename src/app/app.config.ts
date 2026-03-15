import { ApplicationConfig, provideZoneChangeDetection, provideAppInitializer, inject } from '@angular/core';
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
import { UserRepository } from '@core/repositories/abstractions/user.repository';
import { EventRepository } from '@core/repositories/abstractions/event.repository';
import { LeaderboardRepository } from '@core/repositories/abstractions/leaderboard.repository';
import { CommunityRepository } from '@core/repositories/abstractions/community.repository';
import { ChatRepository } from '@core/repositories/abstractions/chat.repository';
import { FirestoreUserRepository } from '@core/repositories/firestore/firestore-user.repository';
import { FirestoreEventRepository } from '@core/repositories/firestore/firestore-event.repository';
import { FirestoreLeaderboardRepository } from '@core/repositories/firestore/firestore-leaderboard.repository';
import { FirestoreCommunityRepository } from '@core/repositories/firestore/firestore-community.repository';
import { FirestoreChatRepository } from '@core/repositories/firestore/firestore-chat.repository';
import { provideFirebase } from '@core/firebase/firebase.provider';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withHashLocation()),
    provideAnimationsAsync(),
    provideFirebase(),
    provideStore(
      [AuthState, UserState, EventsState, LeaderboardState, CommunitiesState, ChatState, MatchState],
      withNgxsReduxDevtoolsPlugin(),
    ),

    /**
     * Resolves the Firebase auth session BEFORE the router runs any guards.
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

    { provide: UserRepository, useClass: FirestoreUserRepository },
    { provide: EventRepository, useClass: FirestoreEventRepository },
    { provide: LeaderboardRepository, useClass: FirestoreLeaderboardRepository },
    { provide: CommunityRepository, useClass: FirestoreCommunityRepository },
    { provide: ChatRepository, useClass: FirestoreChatRepository },
  ],
};
