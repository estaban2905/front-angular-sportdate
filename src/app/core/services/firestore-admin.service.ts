/**
 * core/services/firestore-admin.service.ts
 *
 * Generic Firestore CRUD service for the admin/configuracion panel.
 * Works with any collection under the app's DB_ROOT path.
 *
 * Usage:
 *   const admin = inject(FirestoreAdminService);
 *   admin.watchCollection('events').subscribe(docs => ...);
 *   await admin.deleteDocument('events', 'e1');
 */

import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import {
  collection,
  doc,
  onSnapshot,
  getDocs,
  deleteDoc,
  setDoc,
  addDoc,
  writeBatch,
} from 'firebase/firestore';
import { FIRESTORE, DB_ROOT } from '../firebase/firebase.provider';

/** A Firestore document with its `_id` field added for UI tracking. */
export interface AdminDoc {
  _id: string;
  [key: string]: unknown;
}

@Injectable({ providedIn: 'root' })
export class FirestoreAdminService {
  private readonly db = inject(FIRESTORE);
  private readonly dbRoot = inject(DB_ROOT);

  // ---------------------------------------------------------------------------
  // Path helpers
  // ---------------------------------------------------------------------------

  /** Builds a collection path respecting the optional DB root. */
  private colPath(name: string): string {
    return this.dbRoot ? `${this.dbRoot}/${name}` : name;
  }

  /** Builds a document path respecting the optional DB root. */
  private docPath(colName: string, id: string): string {
    return this.dbRoot ? `${this.dbRoot}/${colName}/${id}` : `${colName}/${id}`;
  }

  // ---------------------------------------------------------------------------
  // Read
  // ---------------------------------------------------------------------------

  /**
   * Returns a real-time Observable of all documents in a collection.
   * Automatically unsubscribes when the Observable is disposed.
   */
  watchCollection(name: string): Observable<AdminDoc[]> {
    return new Observable<AdminDoc[]>(observer => {
      const ref = collection(this.db, this.colPath(name));
      const unsub = onSnapshot(
        ref,
        snap => {
          const docs: AdminDoc[] = snap.docs.map(d => ({ _id: d.id, ...d.data() }));
          observer.next(docs);
        },
        err => observer.error(err),
      );
      return () => unsub();
    });
  }

  // ---------------------------------------------------------------------------
  // Write
  // ---------------------------------------------------------------------------

  /** Overwrites (or creates) a document by id. */
  setDocument(colName: string, id: string, data: Record<string, unknown>): Promise<void> {
    return setDoc(doc(this.db, this.docPath(colName, id)), data);
  }

  /** Adds a new document with an auto-generated id. Returns the new id. */
  async addDocument(colName: string, data: Record<string, unknown>): Promise<string> {
    const ref = await addDoc(collection(this.db, this.colPath(colName)), data);
    return ref.id;
  }

  // ---------------------------------------------------------------------------
  // Delete
  // ---------------------------------------------------------------------------

  /** Deletes a single document. */
  deleteDocument(colName: string, id: string): Promise<void> {
    return deleteDoc(doc(this.db, this.docPath(colName, id)));
  }

  /**
   * Deletes every document in a collection using batched writes.
   * Safe for collections with up to ~5,000 documents (10 batches × 490 ops).
   */
  async clearCollection(name: string): Promise<void> {
    const snap = await getDocs(collection(this.db, this.colPath(name)));
    if (snap.empty) return;

    const CHUNK = 490;
    const docs = snap.docs;
    for (let i = 0; i < docs.length; i += CHUNK) {
      const batch = writeBatch(this.db);
      docs.slice(i, i + CHUNK).forEach(d => batch.delete(d.ref));
      await batch.commit();
    }
  }
}
