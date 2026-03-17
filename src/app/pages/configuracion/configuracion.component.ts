/**
 * pages/configuracion/configuracion.component.ts
 *
 * Shell for the /configuracion section.
 * Provides 3 global Firestore actions (seed, restore-all, clear-all)
 * and a <router-outlet> where child routes render.
 */

import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LucideAngularModule, Play, RefreshCw, Trash2, Loader, CheckCircle, XCircle, AlertTriangle } from 'lucide-angular';
import { FirestoreSeedService } from '@core/services/firestore-seed.service';

type ActionKey = 'seed' | 'restore' | 'clear';
type LogLevel  = 'info' | 'success' | 'error' | 'warning';

export interface LogEntry {
  time: string;
  message: string;
  level: LogLevel;
}

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  standalone: true,
  imports: [RouterOutlet, LucideAngularModule],
})
export class ConfiguracionComponent {
  // ---------------------------------------------------------------------------
  // Icons
  // ---------------------------------------------------------------------------
  readonly playIcon    = Play;
  readonly refreshIcon = RefreshCw;
  readonly trashIcon   = Trash2;
  readonly loaderIcon  = Loader;
  readonly checkIcon   = CheckCircle;
  readonly errorIcon   = XCircle;
  readonly warnIcon    = AlertTriangle;

  // ---------------------------------------------------------------------------
  // Dependencies
  // ---------------------------------------------------------------------------
  private readonly seedService = inject(FirestoreSeedService);

  // ---------------------------------------------------------------------------
  // State
  // ---------------------------------------------------------------------------
  loading: ActionKey | null = null;
  confirmPending: ActionKey | null = null;
  logs: LogEntry[] = [];

  // ---------------------------------------------------------------------------
  // Global actions
  // ---------------------------------------------------------------------------

  async seedIfEmpty(): Promise<void> {
    this.loading = 'seed';
    this.log('Verificando si Firestore está vacío…', 'info');
    try {
      await this.seedService.seedIfEmpty();
      this.log('Completado: datos cargados (o ya existían).', 'success');
    } catch (e) {
      this.log(`Error: ${(e as Error).message}`, 'error');
    } finally {
      this.loading = null;
    }
  }

  async restoreAll(): Promise<void> {
    if (this.confirmPending !== 'restore') { this.confirmPending = 'restore'; return; }
    this.confirmPending = null;
    this.loading = 'restore';
    this.log('Limpiando y restaurando todas las colecciones desde mock…', 'warning');
    try {
      await this.seedService.resetAndSeed();
      this.log('Todas las colecciones restauradas con éxito.', 'success');
    } catch (e) {
      this.log(`Error: ${(e as Error).message}`, 'error');
    } finally {
      this.loading = null;
    }
  }

  async clearAll(): Promise<void> {
    if (this.confirmPending !== 'clear') { this.confirmPending = 'clear'; return; }
    this.confirmPending = null;
    this.loading = 'clear';
    this.log('Eliminando toda la data de Firestore…', 'warning');
    try {
      await this.seedService.clearAll();
      this.log('Firestore vaciado por completo.', 'success');
    } catch (e) {
      this.log(`Error: ${(e as Error).message}`, 'error');
    } finally {
      this.loading = null;
    }
  }

  cancelConfirm(): void { this.confirmPending = null; }

  clearLogs(): void { this.logs = []; }

  // ---------------------------------------------------------------------------
  // Helpers
  // ---------------------------------------------------------------------------

  log(message: string, level: LogLevel): void {
    const time = new Date().toLocaleTimeString('es-CL', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    this.logs.unshift({ time, message, level });
  }
}
