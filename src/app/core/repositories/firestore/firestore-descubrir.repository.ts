/**
 * core/repositories/firestore/firestore-descubrir.repository.ts
 *
 * Colecciones:
 *   {dbRoot}/retos/{id}
 *   {dbRoot}/resultados/{id}
 *   {dbRoot}/calificaciones/{id}
 *   {dbRoot}/profiles/{id}   ← oponentes (colección ya existente)
 *
 * Carga todas las colecciones sin filtro de userId (el filtrado es
 * client-side en el componente usando el campo 'me' del seed).
 */

import { Injectable, inject } from '@angular/core';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { collection, doc, onSnapshot, addDoc, updateDoc } from 'firebase/firestore';
import { FIRESTORE, DB_ROOT } from '../../firebase/firebase.provider';
import { DescubrirRepository } from '../abstractions/descubrir.repository';
import { Reto, Resultado, Calificacion, Profile } from '../../models';

@Injectable()
export class FirestoreDescubrirRepository extends DescubrirRepository {
  private readonly db     = inject(FIRESTORE);
  private readonly dbRoot = inject(DB_ROOT);

  private col(...segments: string[]) {
    return collection(this.db, [this.dbRoot, ...segments].join('/'));
  }
  private d(...segments: string[]) {
    return doc(this.db, [this.dbRoot, ...segments].join('/'));
  }

  // ── Retos ────────────────────────────────────────────────────────────────

  getRetos(): Observable<Reto[]> {
    return new Observable<Reto[]>(observer => {
      const unsub = onSnapshot(
        this.col('retos'),
        snap => observer.next(
          snap.docs
            .map(d => ({ id: d.id, ...d.data() } as Reto))
            .sort((a, b) => b.fechaISO.localeCompare(a.fechaISO)),
        ),
        err => observer.error(err),
      );
      return () => unsub();
    });
  }

  createReto(reto: Omit<Reto, 'id'>): Observable<Reto> {
    return from(addDoc(this.col('retos'), reto)).pipe(
      map(ref => ({ ...reto, id: ref.id } as Reto)),
    );
  }

  updateRetoStatus(retoId: string, status: Reto['status'], ganadorId?: string): Observable<void> {
    const data: Record<string, unknown> = { status };
    if (ganadorId) data['ganadorId'] = ganadorId;
    return from(updateDoc(this.d('retos', retoId), data)).pipe(map(() => undefined));
  }

  // ── Resultados ───────────────────────────────────────────────────────────

  getResultados(): Observable<Resultado[]> {
    return new Observable<Resultado[]>(observer => {
      const unsub = onSnapshot(
        this.col('resultados'),
        snap => observer.next(
          snap.docs
            .map(d => ({ id: d.id, ...d.data() } as Resultado))
            .sort((a, b) => b.fechaISO.localeCompare(a.fechaISO)),
        ),
        err => observer.error(err),
      );
      return () => unsub();
    });
  }

  // ── Calificaciones ───────────────────────────────────────────────────────

  getCalificaciones(): Observable<Calificacion[]> {
    return new Observable<Calificacion[]>(observer => {
      const unsub = onSnapshot(
        this.col('calificaciones'),
        snap => observer.next(
          snap.docs
            .map(d => ({ id: d.id, ...d.data() } as Calificacion))
            .sort((a, b) => b.createdAt.localeCompare(a.createdAt)),
        ),
        err => observer.error(err),
      );
      return () => unsub();
    });
  }

  createCalificacion(cal: Omit<Calificacion, 'id'>): Observable<Calificacion> {
    return from(addDoc(this.col('calificaciones'), cal)).pipe(
      map(ref => ({ ...cal, id: ref.id } as Calificacion)),
    );
  }

  // ── Oponentes (profiles) ─────────────────────────────────────────────────

  getOponentes(): Observable<Profile[]> {
    return new Observable<Profile[]>(observer => {
      const unsub = onSnapshot(
        this.col('profiles'),
        snap => observer.next(snap.docs.map(d => ({ id: d.id, ...d.data() } as Profile))),
        err => observer.error(err),
      );
      return () => unsub();
    });
  }
}
