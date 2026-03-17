/**
 * shared/ui/settings-modal/settings-modal.component.ts
 *
 * Gear button that opens a small popover with theme toggle + logout.
 *
 * Inputs:
 *   position  'above' | 'below'  — direction the popover opens
 *   variant   'dark'  | 'light'  — gear button background context
 */

import { Component, Input, signal, inject, HostListener } from '@angular/core';
import { Store } from '@ngxs/store';
import { toSignal } from '@angular/core/rxjs-interop';
import { ThemeService } from '../../../core/services/theme.service';
import { AuthActions } from '@store/auth/auth.actions';
import { AuthSelectors } from '@store/auth/auth.selectors';
import { LucideAngularModule, Cog, Sun, Moon, LogOut } from 'lucide-angular';

@Component({
  selector: 'app-settings-modal',
  standalone: true,
  imports: [LucideAngularModule],
  template: `
    <div class="relative">

      <!-- Gear trigger -->
      <button
        (click)="toggle()"
        aria-label="Configuración"
        [class]="triggerClass">
        <i-lucide [img]="cogIcon"
          class="w-4 h-4 transition-transform duration-300"
          [class.rotate-45]="isOpen()">
        </i-lucide>
      </button>

      <!-- Backdrop -->
      @if (isOpen()) {
        <div class="fixed inset-0 z-40" (click)="close()"></div>
      }

      <!-- Popover -->
      @if (isOpen()) {
        <div [class]="popoverClass"
          class="absolute right-0 z-50 w-52
                 bg-white dark:bg-[#1E1E32]
                 border border-gray-100 dark:border-[#2D2D4A]
                 rounded-2xl shadow-xl overflow-hidden">

          <!-- Label -->
          <div class="px-4 pt-3 pb-1">
            <p class="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
              Configuración
            </p>
          </div>

          <!-- Theme row -->
          <div class="px-3 pb-1">
            <button
              (click)="themeService.toggleTheme()"
              class="w-full flex items-center justify-between px-3 py-2.5 rounded-xl
                     hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
              <div class="flex items-center gap-2.5">
                @if (themeService.theme() === 'dark') {
                  <i-lucide [img]="sunIcon" class="w-4 h-4 text-yellow-400"></i-lucide>
                  <span class="text-sm font-medium text-[#1A1A2E] dark:text-[#F0F0F5]">Modo claro</span>
                } @else {
                  <i-lucide [img]="moonIcon" class="w-4 h-4 text-indigo-400"></i-lucide>
                  <span class="text-sm font-medium text-[#1A1A2E] dark:text-[#F0F0F5]">Modo oscuro</span>
                }
              </div>
              <!-- Toggle pill -->
              <div class="w-8 h-4 rounded-full flex items-center px-0.5 transition-colors duration-300"
                [class]="themeService.theme() === 'dark' ? 'bg-indigo-500' : 'bg-yellow-400'">
                <div class="w-3 h-3 bg-white rounded-full shadow transition-transform duration-300"
                  [class.translate-x-4]="themeService.theme() === 'dark'">
                </div>
              </div>
            </button>
          </div>

          <!-- Divider -->
          <div class="mx-4 my-1 border-t border-gray-100 dark:border-[#2D2D4A]"></div>

          <!-- User email -->
          @if (displayName()) {
            <div class="px-4 py-2">
              <p class="text-xs text-gray-400 dark:text-gray-500 truncate">{{ displayName() }}</p>
            </div>
          }

          <!-- Logout -->
          <div class="px-3 pb-3">
            <button
              (click)="logout()"
              class="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl
                     text-red-500 dark:text-red-400
                     hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
              <i-lucide [img]="logOutIcon" class="w-4 h-4"></i-lucide>
              <span class="text-sm font-semibold">Cerrar sesión</span>
            </button>
          </div>

        </div>
      }
    </div>
  `,
})
export class SettingsModalComponent {
  @Input() position: 'above' | 'below' = 'below';
  @Input() variant: 'dark' | 'light'   = 'dark';

  readonly isOpen      = signal(false);
  readonly themeService = inject(ThemeService);
  private readonly store = inject(Store);

  readonly cogIcon    = Cog;
  readonly sunIcon    = Sun;
  readonly moonIcon   = Moon;
  readonly logOutIcon = LogOut;

  readonly displayName = toSignal(
    this.store.select(AuthSelectors.displayName),
    { initialValue: '' },
  );

  get triggerClass(): string {
    const base = 'p-2 rounded-full transition-all duration-200 active:scale-90 ';
    return this.variant === 'dark'
      ? base + 'bg-gray-800/50 hover:bg-gray-700 text-gray-400 hover:text-white'
      : base + 'bg-white dark:bg-[#22223A] shadow-md border border-gray-100 dark:border-[#2D2D4A] text-gray-400 dark:text-gray-300';
  }

  get popoverClass(): string {
    return this.position === 'above' ? 'bottom-full mb-2' : 'top-full mt-2';
  }

  @HostListener('document:keydown.escape')
  onEscape(): void { this.isOpen.set(false); }

  toggle(): void { this.isOpen.update(v => !v); }
  close(): void  { this.isOpen.set(false); }

  logout(): void {
    this.store.dispatch(new AuthActions.Logout());
    this.close();
  }
}
