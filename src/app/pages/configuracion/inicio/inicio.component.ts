/**
 * pages/configuracion/inicio/inicio.component.ts
 *
 * Default child of /configuracion.
 * Shows a grid of all managed Firestore collections.
 * Each card links to /configuracion/:nombre for table CRUD.
 */

import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, RefreshCw, Loader } from 'lucide-angular';
import { FirestoreSeedService } from '@core/services/firestore-seed.service';
import { MANAGED_COLLECTIONS, ManagedCollection } from '../configuracion.constants';
import { ConfiguracionComponent } from '../configuracion.component';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  standalone: true,
  imports: [RouterLink, LucideAngularModule],
})
export class InicioComponent {
  readonly refreshIcon = RefreshCw;
  readonly loaderIcon  = Loader;

  private readonly seedService  = inject(FirestoreSeedService);
  private readonly shell        = inject(ConfiguracionComponent);

  readonly collections: ManagedCollection[] = MANAGED_COLLECTIONS;

  restoringCollection: string | null = null;

  async restoreOne(col: ManagedCollection): Promise<void> {
    if (!col.restorable || this.restoringCollection) return;
    this.restoringCollection = col.name;
    this.shell.log(`Restaurando colección: ${col.label}…`, 'info');
    try {
      await this.seedService.restoreCollection(col.name);
      this.shell.log(`${col.label} restaurada correctamente.`, 'success');
    } catch (e) {
      this.shell.log(`Error restaurando ${col.label}: ${(e as Error).message}`, 'error');
    } finally {
      this.restoringCollection = null;
    }
  }
}
