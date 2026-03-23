/**
 * core/models/descubrir.model.ts
 *
 * Modelos para: Retos, Resultados y Calificaciones.
 * Los Oponentes se sirven desde la colección `profiles` (ya existente).
 *
 * Relaciones con otras colecciones:
 *   Reto.defiadorId / retadoId  → profiles/{id}
 *   Resultado.eventoId          → events/{id}    (opcional)
 *   Resultado.participantIds[]  → profiles/{id}
 *   Calificacion.autorId        → profiles/{id}
 *   Calificacion.receptorId     → profiles/{id}
 *   Calificacion.eventoId       → events/{id}    (opcional)
 */

export type RetoStatus = 'pendiente' | 'aceptado' | 'completado' | 'rechazado';

export interface Reto {
  id: string;
  /** userId del retador (puede ser 'me' para el usuario actual) */
  defiadorId: string;
  defiadorNombre: string;
  defiadorEquipo: string;
  /** userId del retado */
  retadoId: string;
  retadoNombre: string;
  retadoEquipo: string;
  sport: string;
  sportEmoji: string;
  /** Fecha legible, ej: '22 Mar' */
  fecha: string;
  fechaISO: string;
  lugar: string;
  status: RetoStatus;
  apuesta?: string;
  /** Quién ganó (profileId), disponible cuando status === 'completado' */
  ganadorId?: string;
  createdAt: string;
}

export interface Resultado {
  id: string;
  /** Ref a events/{id} si el resultado viene de un evento organizado */
  eventoId?: string;
  eventoTitle: string;
  sport: string;
  sportEmoji: string;
  /** Fecha legible */
  fecha: string;
  fechaISO: string;
  lugar: string;
  equipoLocal: string;
  /** profileId del equipo local (para highlight "Mi equipo") */
  equipoLocalId?: string;
  equipoVisita: string;
  equipoVisitaId?: string;
  golesLocal: number;
  golesVisita: number;
  /** Nombre del MVP */
  mvp?: string;
  /** profileId del MVP */
  mvpId?: string;
  /** IDs de todos los participantes → profiles/{id} */
  participantIds: string[];
  createdAt: string;
}

export interface Calificacion {
  id: string;
  /** Quien califica → profiles/{id} */
  autorId: string;
  autorNombre: string;
  /** Quien recibe la calificacion → profiles/{id} */
  receptorId: string;
  receptorNombre: string;
  receptorAvatar: string;
  /** Ref opcional a events/{id} */
  eventoId?: string;
  eventoTitle?: string;
  sport: string;
  /** 1-5 */
  rating: number;
  comentario: string;
  createdAt: string;
}
