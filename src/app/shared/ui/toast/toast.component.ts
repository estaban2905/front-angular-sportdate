import { Component, inject } from '@angular/core';
import { ToastService } from '@core/services/toast.service';

@Component({
  selector: 'app-toast',
  standalone: true,
  template: `
    <div class="fixed bottom-24 md:bottom-6 right-4 z-[9999] flex flex-col gap-2 pointer-events-none">
      @for (toast of toastService.toasts(); track toast.id) {
        <div
          [class]="'pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-2xl shadow-xl border text-sm font-semibold min-w-[220px] max-w-xs animate-fade-up ' + toastClasses(toast.type)"
        >
          <span class="text-base leading-none shrink-0">{{ toastIcon(toast.type) }}</span>
          <span class="flex-1 leading-snug">{{ toast.message }}</span>
          <button
            (click)="toastService.dismiss(toast.id)"
            class="opacity-50 hover:opacity-100 transition-opacity text-lg leading-none shrink-0 ml-1"
          >×</button>
        </div>
      }
    </div>
  `,
})
export class ToastComponent {
  readonly toastService = inject(ToastService);

  toastClasses(type: string): string {
    const map: Record<string, string> = {
      success: 'bg-green-50  dark:bg-green-900/40  border-green-200  dark:border-green-700  text-green-800  dark:text-green-200',
      error:   'bg-red-50    dark:bg-red-900/40    border-red-200    dark:border-red-700    text-red-800    dark:text-red-200',
      warning: 'bg-yellow-50 dark:bg-yellow-900/40 border-yellow-200 dark:border-yellow-700 text-yellow-800 dark:text-yellow-200',
      info:    'bg-blue-50   dark:bg-blue-900/40   border-blue-200   dark:border-blue-700   text-blue-800   dark:text-blue-200',
    };
    return map[type] ?? map['info'];
  }

  toastIcon(type: string): string {
    const map: Record<string, string> = {
      success: '✅', error: '❌', warning: '⚠️', info: 'ℹ️',
    };
    return map[type] ?? 'ℹ️';
  }
}
