import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '@environments/environment';
import { DescubrirRepository } from '../abstractions/descubrir.repository';
import { Reto, Resultado, Calificacion, Profile } from '../../models';
import { RetoStatus } from '../../models/descubrir.model';

const STATUS_MAP: Record<string, RetoStatus> = {
  pending:   'pendiente',
  accepted:  'aceptado',
  declined:  'rechazado',
  finished:  'completado',
  pendiente: 'pendiente',
  aceptado:  'aceptado',
  rechazado: 'rechazado',
  completado:'completado',
};

const STATUS_REVERSE: Record<RetoStatus, string> = {
  pendiente:  'pending',
  aceptado:   'accepted',
  rechazado:  'declined',
  completado: 'finished',
};

function formatDate(iso: string): string {
  const d = new Date(iso);
  const months = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];
  return `${d.getDate()} ${months[d.getMonth()]}`;
}

function mapReto(raw: any): Reto {
  return {
    id: raw.id,
    defiadorId:    raw.creatorId ?? '',
    defiadorNombre: raw.creator?.displayName ?? raw.creatorId ?? 'Usuario',
    defiadorEquipo: raw.creator?.displayName ?? '',
    retadoId:      raw.opponentId ?? '',
    retadoNombre:  raw.opponent?.displayName ?? raw.opponentId ?? 'Oponente',
    retadoEquipo:  raw.opponent?.displayName ?? '',
    sport:         raw.sport ?? '',
    sportEmoji:    '🏅',
    fecha:         raw.fechaISO ? formatDate(raw.fechaISO) : formatDate(raw.createdAt),
    fechaISO:      raw.fechaISO ?? raw.createdAt ?? '',
    lugar:         raw.lugar ?? raw.location ?? 'Por definir',
    status:        STATUS_MAP[raw.status] ?? 'pendiente',
    apuesta:       raw.apuesta,
    ganadorId:     raw.winnerID,
    createdAt:     raw.createdAt ?? '',
  };
}

function mapResultado(raw: any): Resultado {
  return {
    id:            raw.id,
    eventoId:      raw.retoId,
    eventoTitle:   raw.reto?.description ?? 'Partido',
    sport:         raw.reto?.sport ?? '',
    sportEmoji:    '🏅',
    fecha:         raw.fechaISO ? formatDate(raw.fechaISO) : formatDate(raw.createdAt),
    fechaISO:      raw.fechaISO ?? raw.createdAt ?? '',
    lugar:         '',
    equipoLocal:   raw.user?.displayName ?? 'Equipo A',
    equipoLocalId: raw.userId,
    equipoVisita:  'Oponente',
    golesLocal:    typeof raw.score === 'number' ? raw.score : 0,
    golesVisita:   0,
    participantIds:[raw.userId ?? ''],
    createdAt:     raw.createdAt ?? '',
  };
}

function mapCalificacion(raw: any): Calificacion {
  return {
    id:             raw.id,
    autorId:        raw.userId ?? '',
    autorNombre:    raw.user?.displayName ?? 'Usuario',
    receptorId:     raw.target ?? '',
    receptorNombre: raw.target ?? '',
    receptorAvatar: '',
    sport:          '',
    rating:         raw.rating ?? 0,
    comentario:     raw.comentario ?? '',
    createdAt:      raw.createdAt ?? '',
  };
}

@Injectable()
export class HttpDescubrirRepository extends DescubrirRepository {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = `${environment.apiUrl}/descubrir`;

  getRetos(): Observable<Reto[]> {
    return this.http.get<any[]>(`${this.apiUrl}/retos`).pipe(map(list => list.map(mapReto)));
  }

  createReto(reto: Omit<Reto, 'id'>): Observable<Reto> {
    return this.http.post<any>(`${this.apiUrl}/retos`, {
      opponentId:  reto.retadoId,
      sport:       reto.sport,
      description: reto.apuesta,
    }).pipe(map(mapReto));
  }

  updateRetoStatus(retoId: string, status: Reto['status'], ganadorId?: string): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/retos/${retoId}`, {
      status:   STATUS_REVERSE[status] ?? status,
      winnerID: ganadorId,
    });
  }

  getResultados(): Observable<Resultado[]> {
    return this.http.get<any[]>(`${this.apiUrl}/resultados`).pipe(map(list => list.map(mapResultado)));
  }

  getCalificaciones(): Observable<Calificacion[]> {
    return this.http.get<any[]>(`${this.apiUrl}/calificaciones`).pipe(map(list => list.map(mapCalificacion)));
  }

  createCalificacion(cal: Omit<Calificacion, 'id'>): Observable<Calificacion> {
    return this.http.post<any>(`${this.apiUrl}/calificaciones`, {
      rating:    cal.rating,
      target:    cal.receptorId,
      comentario: cal.comentario,
    }).pipe(map(mapCalificacion));
  }

  getOponentes(): Observable<Profile[]> {
    return this.http.get<any[]>(`${this.apiUrl}/oponentes`).pipe(
      map(list => list.map(raw => ({
        id:           raw.id,
        name:         raw.displayName ?? '',
        age:          0,
        imageGradient:'from-blue-400 to-indigo-400',
        emoji:        '🏅',
        sports:       [],
        level:        'Nivel 1',
        compatibility: 0,
        bio:          raw.bio ?? '',
        location:     raw.location ?? '',
      } as Profile))),
    );
  }
}
