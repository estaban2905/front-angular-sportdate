/**
 * core/services/auth.service.ts
 *
 * Wraps Firebase Authentication operations and maps them to app-level types.
 * Consumed by AuthState (NGXS) — do not call directly from components.
 */

import { Injectable, inject } from '@angular/core';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithPopup,
  GoogleAuthProvider,
  User,
} from 'firebase/auth';
import { AUTH } from '../firebase/firebase.provider';
import { AuthUser } from '../../store/auth/auth.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly auth = inject(AUTH);

  /** Emits the current user once on subscribe, then on every auth state change. */
  readonly authState$ = new Observable<AuthUser | null>(observer => {
    const unsubscribe = onAuthStateChanged(
      this.auth,
      user => observer.next(user ? this.toAuthUser(user) : null),
      err => observer.error(err),
    );
    return () => unsubscribe();
  });

  login(email: string, password: string): Observable<AuthUser> {
    return from(signInWithEmailAndPassword(this.auth, email, password)).pipe(
      map(cred => this.toAuthUser(cred.user)),
    );
  }

  register(email: string, password: string, displayName: string): Observable<AuthUser> {
    return from(
      createUserWithEmailAndPassword(this.auth, email, password).then(async cred => {
        await updateProfile(cred.user, { displayName });
        return cred.user;
      }),
    ).pipe(map(user => this.toAuthUser(user)));
  }

  loginWithGoogle(): Observable<AuthUser> {
    const provider = new GoogleAuthProvider();
    return from(signInWithPopup(this.auth, provider)).pipe(
      map(cred => this.toAuthUser(cred.user)),
    );
  }

  sendPasswordReset(email: string): Observable<void> {
    return from(sendPasswordResetEmail(this.auth, email));
  }

  logout(): Observable<void> {
    return from(signOut(this.auth));
  }

  /** Maps Firebase error codes to user-friendly Spanish messages. */
  mapError(err: unknown): string {
    const code = (err as { code?: string })?.code ?? '';
    const messages: Record<string, string> = {
      'auth/invalid-credential':        'Email o contraseña incorrectos.',
      'auth/user-not-found':            'No existe una cuenta con ese email.',
      'auth/wrong-password':            'Contraseña incorrecta.',
      'auth/email-already-in-use':      'Ya existe una cuenta con ese email.',
      'auth/weak-password':             'La contraseña debe tener al menos 6 caracteres.',
      'auth/invalid-email':             'El formato del email no es válido.',
      'auth/too-many-requests':         'Demasiados intentos. Intenta más tarde.',
      'auth/network-request-failed':    'Sin conexión. Verifica tu red.',
      'auth/popup-closed-by-user':      'Cerraste la ventana de Google. Intenta de nuevo.',
      'auth/cancelled-popup-request':   'La solicitud fue cancelada.',
      'auth/popup-blocked':             'El popup fue bloqueado. Permite popups en tu navegador.',
    };
    return messages[code] ?? 'Ocurrió un error inesperado. Intenta de nuevo.';
  }

  private toAuthUser(user: User): AuthUser {
    return {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
    };
  }
}
