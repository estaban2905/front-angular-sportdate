/**
 * core/services/auth.service.ts
 *
 * Wraps Authentication operations and maps them to app-level types.
 * Consumed by AuthState (NGXS) — do not call directly from components.
 * 
 * Now uses HttpAuthService for HTTP-based authentication instead of Firebase.
 */

import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpAuthService } from './http-auth.service';
import { AuthUser } from '../../store/auth/auth.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly httpAuth = inject(HttpAuthService);

  /** Emits the current user once on subscribe, then on every auth state change. */
  readonly authState$: Observable<AuthUser | null> = this.httpAuth.authState$;

  login(email: string, password: string): Observable<AuthUser> {
    return this.httpAuth.login(email, password);
  }

  register(email: string, password: string, displayName: string): Observable<AuthUser> {
    return this.httpAuth.register(email, password, displayName);
  }

  loginWithGoogle(): Observable<AuthUser> {
    return this.httpAuth.loginWithGoogle();
  }

  updateDisplayName(displayName: string): Observable<AuthUser> {
    return this.httpAuth.updateDisplayName(displayName);
  }

  sendPasswordReset(email: string): Observable<void> {
    return this.httpAuth.sendPasswordReset(email);
  }

  logout(): Observable<void> {
    return this.httpAuth.logout();
  }

  /** Maps HTTP error responses to user-friendly Spanish messages. */
  mapError(err: unknown): string {
    return this.httpAuth.mapError(err);
  }
}
