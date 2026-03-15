// store/auth/auth.selectors.ts

import { Selector } from '@ngxs/store';
import { AuthState } from './auth.state';
import { AuthStateModel, AuthUser } from './auth.model';

export class AuthSelectors {
  @Selector([AuthState])
  static user(state: AuthStateModel): AuthUser | null {
    return state.user;
  }

  @Selector([AuthState])
  static isAuthenticated(state: AuthStateModel): boolean {
    return state.user !== null;
  }

  @Selector([AuthState])
  static loading(state: AuthStateModel): boolean {
    return state.loading;
  }

  @Selector([AuthState])
  static error(state: AuthStateModel): string | null {
    return state.error;
  }

  @Selector([AuthState])
  static displayName(state: AuthStateModel): string {
    return state.user?.displayName ?? state.user?.email ?? 'Atleta';
  }

  @Selector([AuthState])
  static resetPasswordSent(state: AuthStateModel): boolean {
    return state.resetPasswordSent;
  }
}
