import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Store } from '@ngxs/store';
import { AuthActions, AuthSelectors } from '@store/auth';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  template: `
    <div class="min-h-screen bg-[#FAFAFA] dark:bg-[#0F0F1A] flex items-center justify-center px-4 py-10 transition-colors duration-300">

      <div class="w-full max-w-md">

        <!-- Branding -->
        <div class="text-center mb-8">
          <div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FF6B6B] to-[#FF8E8E] shadow-lg mb-4">
            <span class="text-3xl">⚡</span>
          </div>
          <h1 class="text-3xl font-bold text-[#1A1A2E] dark:text-[#F0F0F5]">SportDate</h1>
          <p class="text-gray-500 dark:text-gray-400 mt-1 text-sm">Recupera tu acceso</p>
        </div>

        <!-- Form card -->
        <div class="bg-white dark:bg-[#1A1A2E] rounded-2xl shadow-xl border border-gray-100 dark:border-[#2D2D4A] p-8">

          @if (sent()) {
            <!-- Success state -->
            <div class="text-center py-4">
              <div class="text-5xl mb-4">📬</div>
              <h2 class="text-xl font-bold text-[#1A1A2E] dark:text-[#F0F0F5] mb-2">¡Correo enviado!</h2>
              <p class="text-sm text-gray-500 dark:text-gray-400 mb-6">
                Revisa tu bandeja de entrada y sigue las instrucciones para restablecer tu contraseña.
              </p>
              <a
                routerLink="/login"
                class="inline-block w-full py-3.5 rounded-xl font-semibold text-white text-sm text-center
                       bg-gradient-to-r from-[#FF6B6B] to-[#FF8E8E]
                       hover:from-[#ff5252] hover:to-[#ff7070]
                       shadow-md hover:shadow-lg hover:shadow-[#FF6B6B]/30
                       transition-all duration-200"
              >
                Volver al inicio de sesión
              </a>
            </div>
          } @else {
            <h2 class="text-xl font-bold text-[#1A1A2E] dark:text-[#F0F0F5] mb-2">Olvidé mi contraseña</h2>
            <p class="text-sm text-gray-500 dark:text-gray-400 mb-6">
              Ingresa tu email y te enviaremos un enlace para restablecerla.
            </p>

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
                    Enviando...
                  </span>
                } @else {
                  Enviar enlace de recuperación
                }
              </button>

            </form>
          }
        </div>

        <!-- Footer link -->
        <p class="text-center text-sm text-gray-500 dark:text-gray-400 mt-6">
          <a routerLink="/login" class="text-[#FF6B6B] font-semibold hover:underline">
            ← Volver al inicio de sesión
          </a>
        </p>

      </div>
    </div>
  `,
})
export class ForgotPasswordComponent {
  private readonly store = inject(Store);
  private readonly fb = inject(FormBuilder);

  readonly loading = toSignal(this.store.select(AuthSelectors.loading), { initialValue: false });
  readonly error = toSignal(this.store.select(AuthSelectors.error), { initialValue: null });
  readonly sent = toSignal(this.store.select(AuthSelectors.resetPasswordSent), { initialValue: false });

  readonly form = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
  });

  submit(): void {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    const { email } = this.form.getRawValue();
    this.store.dispatch(new AuthActions.ResetPassword(email));
  }
}
