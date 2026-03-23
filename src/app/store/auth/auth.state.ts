// store/auth/auth.state.ts

import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { State, Action, StateContext } from '@ngxs/store';
import { tap, catchError, EMPTY } from 'rxjs';
import { AuthService } from '@core/services/auth.service';
import { GeoService } from '@core/services/geo.service';
import { AuthStateModel } from './auth.model';
import { AuthActions } from './auth.actions';

const DEFAULTS: AuthStateModel = {
  user: null,
  loading: false,
  error: null,
  resetPasswordSent: false,
};

@State<AuthStateModel>({
  name: 'auth',
  defaults: DEFAULTS,
})
@Injectable()
export class AuthState {
  private readonly authService = inject(AuthService);
  private readonly geoService = inject(GeoService);
  private readonly router = inject(Router);

  @Action(AuthActions.SetUser)
  setUser(ctx: StateContext<AuthStateModel>, { user }: AuthActions.SetUser) {
    ctx.patchState({ user, error: null });
    if (user) this.geoService.captureUserPosition();
  }

  @Action(AuthActions.Login)
  login(ctx: StateContext<AuthStateModel>, { email, password }: AuthActions.Login) {
    ctx.patchState({ loading: true, error: null });
    return this.authService.login(email, password).pipe(
      tap(user => {
        ctx.dispatch(new AuthActions.LoginSuccess(user));
      }),
      catchError(err => {
        ctx.dispatch(new AuthActions.LoginFailure(this.authService.mapError(err)));
        return EMPTY;
      }),
    );
  }

  @Action(AuthActions.LoginSuccess)
  loginSuccess(ctx: StateContext<AuthStateModel>, { user }: AuthActions.LoginSuccess) {
    ctx.patchState({ user, loading: false, error: null });
    this.geoService.captureUserPosition();
    this.router.navigate(['/dashboard']);
  }

  @Action(AuthActions.LoginFailure)
  loginFailure(ctx: StateContext<AuthStateModel>, { error }: AuthActions.LoginFailure) {
    ctx.patchState({ loading: false, error });
  }

  @Action(AuthActions.Register)
  register(
    ctx: StateContext<AuthStateModel>,
    { email, password, displayName }: AuthActions.Register,
  ) {
    ctx.patchState({ loading: true, error: null });
    return this.authService.register(email, password, displayName).pipe(
      tap(user => {
        ctx.dispatch(new AuthActions.RegisterSuccess(user));
      }),
      catchError(err => {
        ctx.dispatch(new AuthActions.RegisterFailure(this.authService.mapError(err)));
        return EMPTY;
      }),
    );
  }

  @Action(AuthActions.RegisterSuccess)
  registerSuccess(ctx: StateContext<AuthStateModel>, { user }: AuthActions.RegisterSuccess) {
    ctx.patchState({ user, loading: false, error: null });
    this.geoService.captureUserPosition();
    this.router.navigate(['/dashboard']);
  }

  @Action(AuthActions.RegisterFailure)
  registerFailure(ctx: StateContext<AuthStateModel>, { error }: AuthActions.RegisterFailure) {
    ctx.patchState({ loading: false, error });
  }

  @Action(AuthActions.LoginWithGoogle)
  loginWithGoogle(ctx: StateContext<AuthStateModel>) {
    ctx.patchState({ loading: true, error: null });
    return this.authService.loginWithGoogle().pipe(
      tap(user => ctx.dispatch(new AuthActions.LoginSuccess(user))),
      catchError(err => {
        ctx.dispatch(new AuthActions.LoginFailure(this.authService.mapError(err)));
        return EMPTY;
      }),
    );
  }

  @Action(AuthActions.ResetPassword)
  resetPassword(ctx: StateContext<AuthStateModel>, { email }: AuthActions.ResetPassword) {
    ctx.patchState({ loading: true, error: null, resetPasswordSent: false });
    return this.authService.sendPasswordReset(email).pipe(
      tap(() => ctx.dispatch(new AuthActions.ResetPasswordSuccess())),
      catchError(err => {
        ctx.dispatch(new AuthActions.ResetPasswordFailure(this.authService.mapError(err)));
        return EMPTY;
      }),
    );
  }

  @Action(AuthActions.ResetPasswordSuccess)
  resetPasswordSuccess(ctx: StateContext<AuthStateModel>) {
    ctx.patchState({ loading: false, error: null, resetPasswordSent: true });
  }

  @Action(AuthActions.ResetPasswordFailure)
  resetPasswordFailure(ctx: StateContext<AuthStateModel>, { error }: AuthActions.ResetPasswordFailure) {
    ctx.patchState({ loading: false, error, resetPasswordSent: false });
  }

  @Action(AuthActions.Logout)
  logout(ctx: StateContext<AuthStateModel>) {
    return this.authService.logout().pipe(
      tap(() => ctx.dispatch(new AuthActions.LogoutSuccess())),
    );
  }

  @Action(AuthActions.LogoutSuccess)
  logoutSuccess(ctx: StateContext<AuthStateModel>) {
    ctx.patchState({ user: null, error: null });
    this.geoService.clearCachedPosition();
    this.router.navigate(['/login']);
  }

  @Action(AuthActions.UpdateDisplayName)
  updateDisplayName(
    ctx: StateContext<AuthStateModel>,
    { displayName }: AuthActions.UpdateDisplayName,
  ) {
    ctx.patchState({ loading: true, error: null });
    return this.authService.updateDisplayName(displayName).pipe(
      tap({
        next: user => ctx.patchState({ user, loading: false }),
        error: err => ctx.patchState({ loading: false, error: this.authService.mapError(err) }),
      }),
    );
  }
}
