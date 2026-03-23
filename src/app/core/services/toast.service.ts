import { Injectable, signal } from '@angular/core';

export type ToastType = 'success' | 'error' | 'warning' | 'info';

export interface Toast {
  id: number;
  message: string;
  type: ToastType;
}

@Injectable({ providedIn: 'root' })
export class ToastService {
  readonly toasts = signal<Toast[]>([]);

  private nextId = 0;

  show(message: string, type: ToastType = 'info', duration = 3500): void {
    const id = ++this.nextId;
    this.toasts.update(t => [...t, { id, message, type }]);
    setTimeout(() => this.dismiss(id), duration);
  }

  success(msg: string, duration?: number): void { this.show(msg, 'success', duration); }
  error(msg: string, duration?: number): void   { this.show(msg, 'error',   duration); }
  warning(msg: string, duration?: number): void { this.show(msg, 'warning', duration); }
  info(msg: string, duration?: number): void    { this.show(msg, 'info',    duration); }

  dismiss(id: number): void {
    this.toasts.update(t => t.filter(toast => toast.id !== id));
  }
}
