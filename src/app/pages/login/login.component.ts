import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Store } from '@ngxs/store';
import { AuthActions, AuthSelectors } from '@store/auth';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  template: `
    <div class="min-h-screen bg-[#FAFAFA] dark:bg-[#0F0F1A] flex items-center justify-center px-4 py-10 transition-colors duration-300">

      <!-- Card -->
      <div class="w-full max-w-md">

        <!-- Branding -->
        <div class="text-center mb-8">
          <div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FF6B6B] to-[#FF8E8E] shadow-lg mb-4">
            <span class="text-3xl">⚡</span>
          </div>
          <h1 class="text-3xl font-bold text-[#1A1A2E] dark:text-[#F0F0F5]">SportDate</h1>
          <p class="text-gray-500 dark:text-gray-400 mt-1 text-sm">Conecta. Compite. Crece.</p>
        </div>

        <!-- Form card -->
        <div class="bg-white dark:bg-[#1A1A2E] rounded-2xl shadow-xl border border-gray-100 dark:border-[#2D2D4A] p-8">
          <h2 class="text-xl font-bold text-[#1A1A2E] dark:text-[#F0F0F5] mb-6">Iniciar sesión</h2>

          <form [formGroup]="form" (ngSubmit)="submit()" class="space-y-4">

            <!-- Email -->
            <div>
              <label class="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1.5">
                Email
              </label>
              <input
                type="email"
                formControlName="email"
                placeholder="tu@email.com"
                class="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-[#2D2D4A]
                       bg-gray-50 dark:bg-[#0F0F1A] text-[#1A1A2E] dark:text-[#F0F0F5]
                       placeholder-gray-400 dark:placeholder-gray-600
                       focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/40 focus:border-[#FF6B6B]
                       transition-all duration-200 text-sm"
              />
              @if (form.get('email')?.invalid && form.get('email')?.touched) {
                <p class="text-xs text-red-500 mt-1">Ingresa un email válido.</p>
              }
            </div>

            <!-- Password -->
            <div>
              <label class="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1.5">
                Contraseña
              </label>
              <div class="relative">
                <input
                  [type]="showPassword() ? 'text' : 'password'"
                  formControlName="password"
                  placeholder="••••••••"
                  class="w-full px-4 py-3 pr-11 rounded-xl border border-gray-200 dark:border-[#2D2D4A]
                         bg-gray-50 dark:bg-[#0F0F1A] text-[#1A1A2E] dark:text-[#F0F0F5]
                         placeholder-gray-400 dark:placeholder-gray-600
                         focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/40 focus:border-[#FF6B6B]
                         transition-all duration-200 text-sm"
                />
                <button
                  type="button"
                  (click)="showPassword.set(!showPassword())"
                  class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                >
                  {{ showPassword() ? '🙈' : '👁️' }}
                </button>
              </div>
              @if (form.get('password')?.invalid && form.get('password')?.touched) {
                <p class="text-xs text-red-500 mt-1">La contraseña es obligatoria.</p>
              }
            </div>

            <!-- Forgot password -->
            <div class="text-right">
              <a routerLink="/forgot-password" class="text-xs text-[#FF6B6B] hover:underline font-medium">
                ¿Olvidaste tu contraseña?
              </a>
            </div>

            <!-- Error global -->
            @if (error()) {
              <div class="flex items-center gap-2 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl px-4 py-3">
                <span class="text-base">⚠️</span>
                <p class="text-sm text-red-600 dark:text-red-400">{{ error() }}</p>
              </div>
            }

            <!-- Submit -->
            <button
              type="submit"
              [disabled]="loading() || form.invalid"
              class="w-full py-3.5 rounded-xl font-semibold text-white text-sm
                     bg-gradient-to-r from-[#FF6B6B] to-[#FF8E8E]
                     hover:from-[#ff5252] hover:to-[#ff7070]
                     disabled:opacity-50 disabled:cursor-not-allowed
                     shadow-md hover:shadow-lg hover:shadow-[#FF6B6B]/30
                     transition-all duration-200 active:scale-[0.98]"
            >
              @if (loading()) {
                <span class="inline-flex items-center gap-2">
                  <span class="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin"></span>
                  Entrando...
                </span>
              } @else {
                Entrar 🚀
              }
            </button>

            <!-- Divider -->
            <div class="relative flex items-center gap-3">
              <div class="flex-1 h-px bg-gray-200 dark:bg-[#2D2D4A]"></div>
              <span class="text-xs text-gray-400 dark:text-gray-500">o continúa con</span>
              <div class="flex-1 h-px bg-gray-200 dark:bg-[#2D2D4A]"></div>
            </div>

            <!-- Google login -->
            <button
              type="button"
              (click)="loginWithGoogle()"
              [disabled]="loading()"
              class="w-full py-3 rounded-xl font-semibold text-sm
                     border border-gray-200 dark:border-[#2D2D4A]
                     bg-white dark:bg-[#0F0F1A]
                     text-[#1A1A2E] dark:text-[#F0F0F5]
                     hover:bg-gray-50 dark:hover:bg-[#1A1A2E]
                     disabled:opacity-50 disabled:cursor-not-allowed
                     shadow-sm hover:shadow-md
                     transition-all duration-200 active:scale-[0.98]
                     flex items-center justify-center gap-3"
            >
              <svg class="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Continuar con Google
            </button>

          </form>
        </div>

        <!-- Footer link -->
        <p class="text-center text-sm text-gray-500 dark:text-gray-400 mt-6">
          ¿No tienes cuenta?
          <a routerLink="/register" class="text-[#FF6B6B] font-semibold hover:underline ml-1">
            Regístrate gratis
          </a>
        </p>

      </div>
    </div>
  `,
})
export class LoginComponent {
  private readonly store = inject(Store);
  private readonly fb = inject(FormBuilder);

  readonly showPassword = signal(false);
  readonly loading = toSignal(this.store.select(AuthSelectors.loading), { initialValue: false });
  readonly error = toSignal(this.store.select(AuthSelectors.error), { initialValue: null });

  readonly form = this.fb.nonNullable.group({
    email:    ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  submit(): void {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    const { email, password } = this.form.getRawValue();
    this.store.dispatch(new AuthActions.Login(email, password));
  }

  loginWithGoogle(): void {
    this.store.dispatch(new AuthActions.LoginWithGoogle());
  }
}
