/**
 * pages/configuracion/coleccion/coleccion.component.ts
 *
 * Table view for a single Firestore collection.
 * Activated at /configuracion/:nombre
 *
 * Features:
 *  - Real-time data via FirestoreAdminService.watchCollection()
 *  - Add document (JSON editor modal)
 *  - Edit document (JSON editor modal, pre-filled)
 *  - Delete document (inline confirmation)
 *  - Clear entire collection
 *  - Restore collection from mock data
 */

import { Component, OnInit, OnDestroy, inject, NgZone } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { LucideAngularModule, ArrowLeft, Plus, Pencil, Trash2, RefreshCw, X, Save, Loader, AlertTriangle } from 'lucide-angular';
import { FirestoreAdminService, AdminDoc } from '@core/services/firestore-admin.service';
import { FirestoreSeedService } from '@core/services/firestore-seed.service';
import { MANAGED_COLLECTIONS, ManagedCollection } from '../configuracion.constants';
import { ConfiguracionComponent } from '../configuracion.component';

@Component({
  selector: 'app-coleccion',
  templateUrl: './coleccion.component.html',
  standalone: true,
  imports: [RouterLink, FormsModule, LucideAngularModule],
})
export class ColeccionComponent implements OnInit, OnDestroy {
  // ---------------------------------------------------------------------------
  // Icons
  // ---------------------------------------------------------------------------
  readonly arrowLeftIcon = ArrowLeft;
  readonly plusIcon      = Plus;
  readonly pencilIcon    = Pencil;
  readonly trashIcon     = Trash2;
  readonly refreshIcon   = RefreshCw;
  readonly xIcon         = X;
  readonly saveIcon      = Save;
  readonly loaderIcon    = Loader;
  readonly warnIcon      = AlertTriangle;

  // ---------------------------------------------------------------------------
  // Dependencies
  // ---------------------------------------------------------------------------
  private readonly route       = inject(ActivatedRoute);
  private readonly admin       = inject(FirestoreAdminService);
  private readonly seedService = inject(FirestoreSeedService);
  private readonly shell       = inject(ConfiguracionComponent);
  private readonly ngZone      = inject(NgZone);

  // ---------------------------------------------------------------------------
  // State
  // ---------------------------------------------------------------------------
  collectionName = '';
  collectionMeta: ManagedCollection | undefined;

  docs: AdminDoc[] = [];
  loading = true;

  /** Column keys derived from the first loaded document. */
  columns: string[] = [];

  /** Row being confirmed for deletion. */
  deletingId: string | null = null;

  /** Whether a destructive operation (clear/restore) is running. */
  bulkLoading: 'clear' | 'restore' | null = null;
  confirmBulk: 'clear' | 'restore' | null = null;

  // ── Modal state ────────────────────────────────────────────────────────────
  modalOpen = false;
  /** null = adding new, AdminDoc = editing existing */
  editingDoc: AdminDoc | null = null;
  jsonText = '';
  jsonError = '';
  savingModal = false;

  private sub?: Subscription;

  // ---------------------------------------------------------------------------
  // Lifecycle
  // ---------------------------------------------------------------------------
  ngOnInit(): void {
    this.collectionName = this.route.snapshot.paramMap.get('nombre') ?? '';
    this.collectionMeta = MANAGED_COLLECTIONS.find(c => c.name === this.collectionName);

    this.sub = this.admin.watchCollection(this.collectionName).subscribe({
      next: docs => {
        this.ngZone.run(() => {
          this.docs = docs;
          this.loading = false;
          if (docs.length > 0 && this.columns.length === 0) {
            this.columns = this._deriveColumns(docs[0]);
          }
        });
      },
      error: () => { this.ngZone.run(() => { this.loading = false; }); },
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  // ---------------------------------------------------------------------------
  // Table helpers
  // ---------------------------------------------------------------------------

  /** Returns the display value for a cell (truncated). */
  cellValue(doc: AdminDoc, key: string): string {
    const val = key === '_id' ? doc._id : doc[key];
    if (val === null || val === undefined) return '—';
    const str = typeof val === 'object' ? JSON.stringify(val) : String(val);
    return str.length > 55 ? str.slice(0, 52) + '…' : str;
  }

  /** Label shown in the column header. */
  colLabel(key: string): string {
    return key === '_id' ? 'ID' : key;
  }

  // ---------------------------------------------------------------------------
  // Add / Edit (JSON modal)
  // ---------------------------------------------------------------------------

  openAdd(): void {
    this.editingDoc = null;
    this.jsonText   = '{\n  \n}';
    this.jsonError  = '';
    this.modalOpen  = true;
  }

  openEdit(doc: AdminDoc): void {
    this.editingDoc = doc;
    // Build the data object without _id for editing
    const { _id, ...data } = doc;
    this.jsonText  = JSON.stringify(data, null, 2);
    this.jsonError = '';
    this.modalOpen = true;
  }

  closeModal(): void {
    if (this.savingModal) return;
    this.modalOpen  = false;
    this.editingDoc = null;
    this.jsonError  = '';
  }

  async saveModal(): Promise<void> {
    let parsed: Record<string, unknown>;
    try {
      parsed = JSON.parse(this.jsonText);
    } catch {
      this.jsonError = 'JSON inválido — revisa la sintaxis.';
      return;
    }

    this.savingModal = true;
    this.jsonError   = '';
    try {
      if (this.editingDoc) {
        await this.admin.setDocument(this.collectionName, this.editingDoc._id, parsed);
        this.shell.log(`Documento "${this.editingDoc._id}" actualizado.`, 'success');
      } else {
        const newId = await this.admin.addDocument(this.collectionName, parsed);
        this.shell.log(`Documento "${newId}" añadido a ${this.collectionName}.`, 'success');
        // Refresh columns if this is the first doc
        if (this.columns.length === 0) {
          this.columns = this._deriveColumns({ _id: newId, ...parsed });
        }
      }
      this.closeModal();
    } catch (e) {
      this.jsonError = `Error: ${(e as Error).message}`;
    } finally {
      this.savingModal = false;
    }
  }

  // ---------------------------------------------------------------------------
  // Delete
  // ---------------------------------------------------------------------------

  requestDelete(id: string): void {
    this.deletingId = this.deletingId === id ? null : id;
  }

  async confirmDelete(id: string): Promise<void> {
    try {
      await this.admin.deleteDocument(this.collectionName, id);
      this.shell.log(`Documento "${id}" eliminado de ${this.collectionName}.`, 'success');
    } catch (e) {
      this.shell.log(`Error: ${(e as Error).message}`, 'error');
    } finally {
      this.deletingId = null;
    }
  }

  // ---------------------------------------------------------------------------
  // Bulk: clear / restore
  // ---------------------------------------------------------------------------

  async clearCollection(): Promise<void> {
    if (this.confirmBulk !== 'clear') { this.confirmBulk = 'clear'; return; }
    this.confirmBulk = null;
    this.bulkLoading = 'clear';
    this.shell.log(`Vaciando colección ${this.collectionName}…`, 'warning');
    try {
      await this.admin.clearCollection(this.collectionName);
      this.columns = [];
      this.shell.log(`Colección ${this.collectionName} vaciada.`, 'success');
    } catch (e) {
      this.shell.log(`Error: ${(e as Error).message}`, 'error');
    } finally {
      this.bulkLoading = null;
    }
  }

  async restoreCollection(): Promise<void> {
    if (this.confirmBulk !== 'restore') { this.confirmBulk = 'restore'; return; }
    this.confirmBulk = null;
    this.bulkLoading = 'restore';
    this.shell.log(`Restaurando ${this.collectionName} desde mock…`, 'warning');
    try {
      await this.seedService.restoreCollection(this.collectionName);
      this.shell.log(`Colección ${this.collectionName} restaurada.`, 'success');
    } catch (e) {
      this.shell.log(`Error: ${(e as Error).message}`, 'error');
    } finally {
      this.bulkLoading = null;
    }
  }

  cancelBulk(): void { this.confirmBulk = null; }

  // ---------------------------------------------------------------------------
  // Private
  // ---------------------------------------------------------------------------

  /** Pick the most useful columns from a document (max 4 data cols + _id). */
  private _deriveColumns(doc: AdminDoc): string[] {
    const skip = new Set(['avatars', 'imageGradient', 'sports', 'tags']);
    const dataKeys = Object.keys(doc)
      .filter(k => k !== '_id' && !skip.has(k))
      .slice(0, 4);
    return ['_id', ...dataKeys];
  }
}
