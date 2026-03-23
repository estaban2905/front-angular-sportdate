/**
 * core/services/http-auth.service.ts
 *
 * HTTP-based authentication service to replace Firebase Auth.
 * Communicates with your custom backend API.
 *
 * Usage in app.config.ts:
 *   { provide: AuthService, useClass: HttpAuthService }
 */

import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { environment } from '@environments/environment';
import { AuthUser } from '@store/auth/auth.model';

interface AuthResponse {
  user: AuthUser;
  token?: string;
}

interface RegisterRequest {
  email: string;
  password: string;
  displayName: string;
}

interface LoginRequest {
  email: string;
  password: string;
}

@Injectable({ providedIn: 'root' })
export class HttpAuthService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = `${environment.apiUrl}/auth`;

  /** Current authenticated user */
  private currentUserSubject = new BehaviorSubject<AuthUser | null>(null);
  readonly authState$ = this.currentUserSubject.asObservable();

  /** Token storage key */
  private readonly tokenKey = 'auth_token';
  private readonly userKey  = 'auth_user';

  constructor() {
    this.restoreAuthState();
  }

  /**
   * Login with email and password
   */
  login(email: string, password: string): Observable<AuthUser> {
    return this.http
      .post<AuthResponse>(`${this.apiUrl}/login`, { email, password } as LoginRequest)
      .pipe(
        tap(response => {
          this.setCurrentUser(response.user);
          if (response.token) {
            this.saveToken(response.token);
          }
        }),
        map(response => response.user),
        catchError(err => this.handleError(err)),
      );
  }

  /**
   * Register with email, password, and display name
   */
  register(email: string, password: string, displayName: string): Observable<AuthUser> {
    return this.http
      .post<AuthResponse>(`${this.apiUrl}/register`, { email, password, displayName } as RegisterRequest)
      .pipe(
        tap(response => {
          this.setCurrentUser(response.user);
          if (response.token) {
            this.saveToken(response.token);
          }
        }),
        map(response => response.user),
        catchError(err => this.handleError(err)),
      );
  }

  /**
   * Login with Google (requires backend implementation)
   * For now, throws an error - implement when backend is ready
   */
  loginWithGoogle(): Observable<AuthUser> {
    return throwError(() => new Error('Google login not yet implemented with HTTP backend'));
  }

  /**
   * Update the display name of the current user
   */
  updateDisplayName(displayName: string): Observable<AuthUser> {
    return this.http
      .put<AuthResponse>(`${this.apiUrl}/profile`, { displayName })
      .pipe(
        tap(response => this.setCurrentUser(response.user)),
        map(response => response.user),
        catchError(err => this.handleError(err)),
      );
  }

  /**
   * Send password reset email
   */
  sendPasswordReset(email: string): Observable<void> {
    return this.http
      .post<void>(`${this.apiUrl}/password-reset`, { email })
      .pipe(
        catchError(err => this.handleError(err)),
      );
  }

  /**
   * Logout and clear stored token/user
   */
  logout(): Observable<void> {
    return this.http
      .post<void>(`${this.apiUrl}/logout`, {})
      .pipe(
        tap(() => {
          this.clearAuthState();
        }),
        catchError(err => {
          // Clear auth state even if logout request fails
          this.clearAuthState();
          return throwError(() => err);
        }),
      );
  }

  /**
   * Get current user (for guards/interceptors)
   */
  getCurrentUser(): AuthUser | null {
    return this.currentUserSubject.value;
  }

  /**
   * Get current auth token
   */
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  /**
   * Check if user is authenticated
   */
  isAuthenticated(): boolean {
    return this.currentUserSubject.value !== null && this.getToken() !== null;
  }

  /**
   * Maps HTTP error responses to user-friendly Spanish messages
   */
  mapError(err: unknown): string {
    if (!(err instanceof HttpErrorResponse)) {
      return 'Ocurrió un error inesperado. Intenta de nuevo.';
    }

    const messages: Record<number, string> = {
      400: err.error?.message || 'Datos inválidos.',
      401: 'Email o contraseña incorrectos.',
      403: 'No tienes permiso para realizar esta acción.',
      404: 'Usuario no encontrado.',
      409: 'Ya existe una cuenta con ese email.',
      422: err.error?.message || 'Los datos enviados son inválidos.',
      429: 'Demasiados intentos. Intenta más tarde.',
      500: 'Error del servidor. Intenta más tarde.',
      0: 'Sin conexión. Verifica tu red.',
    };

    return messages[err.status] ?? 'Ocurrió un error inesperado. Intenta de nuevo.';
  }

  /**
   * Set current user and emit via authState$
   */
  private setCurrentUser(user: AuthUser | null): void {
    this.currentUserSubject.next(user);
    if (user) {
      localStorage.setItem(this.userKey, JSON.stringify(user));
    } else {
      localStorage.removeItem(this.userKey);
    }
  }

  /**
   * Save auth token to localStorage
   */
  private saveToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  /**
   * Clear auth state (user and token)
   */
  private clearAuthState(): void {
    this.currentUserSubject.next(null);
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.userKey);
  }

  /**
   * Restore authentication state from localStorage (on app init)
   */
  private restoreAuthState(): void {
    const token = localStorage.getItem(this.tokenKey);
    const userJson = localStorage.getItem(this.userKey);
    if (token && userJson) {
      try {
        const user: AuthUser = JSON.parse(userJson);
        this.currentUserSubject.next(user);
      } catch {
        localStorage.removeItem(this.userKey);
        localStorage.removeItem(this.tokenKey);
      }
    }
  }

  /**
   * Handle HTTP errors
   */
  private handleError(err: unknown): Observable<never> {
    const message = this.mapError(err);
    return throwError(() => new Error(message));
  }
}
