import { Observable } from 'rxjs';
import { Reto, Resultado, Calificacion, Profile } from '../../models';

export abstract class DescubrirRepository {
  abstract getRetos(): Observable<Reto[]>;
  abstract createReto(reto: Omit<Reto, 'id'>): Observable<Reto>;
  abstract updateRetoStatus(retoId: string, status: Reto['status'], ganadorId?: string): Observable<void>;

  abstract getResultados(): Observable<Resultado[]>;

  abstract getCalificaciones(): Observable<Calificacion[]>;
  abstract createCalificacion(cal: Omit<Calificacion, 'id'>): Observable<Calificacion>;

  abstract getOponentes(): Observable<Profile[]>;
}
