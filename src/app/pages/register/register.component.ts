import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Store } from '@ngxs/store';
import { AuthActions, AuthSelectors } from '@store/auth';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-register',
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
          <p class="text-gray-500 dark:text-gray-400 mt-1 text-sm">Tu comunidad deportiva te espera 🏃‍♀️⚽🎾</p>
        </div>

        <!-- Form card -->
        <div class="bg-white dark:bg-[#1A1A2E] rounded-2xl shadow-xl border border-gray-100 dark:border-[#2D2D4A] p-8">
          <h2 class="text-xl font-bold text-[#1A1A2E] dark:text-[#F0F0F5] mb-6">Crear cuenta</h2>

          <form [formGroup]="form" (ngSubmit)="submit()" class="space-y-4">

            <!-- Nombre -->
            <div>
              <label class="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1.5">
                Nombre de atleta
              </label>
              <input
                type="text"
                formControlName="displayName"
                placeholder="¿Cómo te llamas?"
                class="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-[#2D2D4A]
                       bg-gray-50 dark:bg-[#0F0F1A] text-[#1A1A2E] dark:text-[#F0F0F5]
                       placeholder-gray-400 dark:placeholder-gray-600
                       focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/40 focus:border-[#FF6B6B]
                       transition-all duration-200 text-sm"
              />
              @if (form.get('displayName')?.errors?.['required'] && form.get('displayName')?.touched) {
                <p class="text-xs text-red-500 mt-1">El nombre es obligatorio.</p>
              }
              @if (form.get('displayName')?.errors?.['minlength'] && form.get('displayName')?.touched) {
                <p class="text-xs text-red-500 mt-1">Mínimo 2 caracteres.</p>
              }
              @if (form.get('displayName')?.errors?.['maxlength'] && form.get('displayName')?.touched) {
                <p class="text-xs text-red-500 mt-1">Máximo 30 caracteres.</p>
              }
            </div>

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
                  placeholder="Mínimo 6 caracteres"
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
                <p class="text-xs text-red-500 mt-1">Mínimo 6 caracteres.</p>
              }
            </div>

            <!-- Confirm password -->
            <div>
              <label class="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1.5">
                Confirmar contraseña
              </label>
              <input
                [type]="showPassword() ? 'text' : 'password'"
                formControlName="confirmPassword"
                placeholder="Repite tu contraseña"
                class="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-[#2D2D4A]
                       bg-gray-50 dark:bg-[#0F0F1A] text-[#1A1A2E] dark:text-[#F0F0F5]
                       placeholder-gray-400 dark:placeholder-gray-600
                       focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]/40 focus:border-[#FF6B6B]
                       transition-all duration-200 text-sm"
              />
              @if (form.errors?.['mismatch'] && form.get('confirmPassword')?.touched) {
                <p class="text-xs text-red-500 mt-1">Las contraseñas no coinciden.</p>
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
                  Creando cuenta...
                </span>
              } @else {
                Unirme al equipo 🏆
              }
            </button>

          </form>
        </div>

        <!-- Footer link -->
        <p class="text-center text-sm text-gray-500 dark:text-gray-400 mt-6">
          ¿Ya tienes cuenta?
          <a routerLink="/login" class="text-[#FF6B6B] font-semibold hover:underline ml-1">
            Inicia sesión
          </a>
        </p>

      </div>
    </div>
  `,
})
export class RegisterComponent {
  private readonly store = inject(Store);
  private readonly fb = inject(FormBuilder);

  readonly showPassword = signal(false);
  readonly loading = toSignal(this.store.select(AuthSelectors.loading), { initialValue: false });
  readonly error = toSignal(this.store.select(AuthSelectors.error), { initialValue: null });

  readonly form = this.fb.nonNullable.group(
    {
      displayName:     ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      email:           ['', [Validators.required, Validators.email]],
      password:        ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
    },
    { validators: this.passwordMatch },
  );

  submit(): void {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    const { email, password, displayName } = this.form.getRawValue();
    this.store.dispatch(new AuthActions.Register(email, password, displayName));
  }

  private passwordMatch(group: import('@angular/forms').AbstractControl) {
    const pw  = group.get('password')?.value;
    const cpw = group.get('confirmPassword')?.value;
    return pw === cpw ? null : { mismatch: true };
  }
}
