import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { environment } from '@environments/environment';
import { EventRepository } from '../abstractions/event.repository';
import { SportEvent, Challenge, Attendance } from '../../models';

const SPORT_EMOJIS: Record<string, string> = {
  football: '⚽', futbol: '⚽', soccer: '⚽',
  basketball: '🏀', basquetbol: '🏀',
  tennis: '🎾', tenis: '🎾',
  running: '🏃', carrera: '🏃',
  cycling: '🚴', ciclismo: '🚴',
  swimming: '🏊', natacion: '🏊',
  volleyball: '🏐', voleibol: '🏐',
  baseball: '⚾', beisbol: '⚾',
  golf: '⛳',
  boxing: '🥊', boxeo: '🥊',
  default: '🏅',
};

function getSportEmoji(sport: string): string {
  return SPORT_EMOJIS[sport?.toLowerCase()] ?? SPORT_EMOJIS['default'];
}

function formatEventDate(isoDate: string): { date: string; dateISO: string; time: string } {
  const d = new Date(isoDate);
  const dateISO = d.toISOString().split('T')[0];
  const days = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
  const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
  const date = `${days[d.getDay()]} ${d.getDate()} ${months[d.getMonth()]}`;
  const time = `${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`;
  return { date, dateISO, time };
}

function mapEvent(raw: any): SportEvent {
  const { date, dateISO, time } = formatEventDate(raw.startTime ?? raw.createdAt);
  return {
    id: raw.id,
    title: raw.title ?? '',
    sport: raw.sport ?? '',
    sportEmoji: getSportEmoji(raw.sport),
    date,
    dateISO,
    time,
    location: raw.location ?? '',
    description: raw.description ?? '',
    level: raw.level,
    courtType: raw.courtType,
    modality: raw.modality,
    participants: raw.participants ?? 0,
    maxParticipants: raw.maxParticipants ?? 20,
    avatars: [],
    createdBy: raw.creatorId ?? raw.createdBy ?? '',
    createdAt: raw.createdAt ?? '',
    status: raw.status ?? 'open',
    participantIds: raw.participantIds ?? [],
    lat: raw.latitude ?? raw.lat,
    lng: raw.longitude ?? raw.lng,
  };
}

@Injectable()
export class HttpEventRepository extends EventRepository {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = `${environment.apiUrl}/events`;

  getEvents(): Observable<SportEvent[]> {
    return this.http.get<any[]>(`${this.apiUrl}`).pipe(
      map(events => events.map(mapEvent)),
    );
  }

  getChallenges(): Observable<Challenge[]> {
    return EMPTY.pipe(map(() => []));
  }

  createEvent(event: Omit<SportEvent, 'id'>): Observable<SportEvent> {
    // Build startTime from the frontend's dateISO + time fields
    const startTime = (event.dateISO && event.time)
      ? new Date(`${event.dateISO}T${event.time}:00`)
      : new Date();
    // Default endTime to 2 hours after start when not provided
    const endTime = new Date(startTime.getTime() + 2 * 60 * 60 * 1000);

    const dto = {
      title:           event.title,
      description:     event.description ?? '',
      sport:           event.sport,
      location:        event.location,
      latitude:        event.lat ?? 0,
      longitude:       event.lng ?? 0,
      startTime:       startTime.toISOString(),
      endTime:         endTime.toISOString(),
      maxParticipants: event.maxParticipants,
    };

    return this.http.post<any>(`${this.apiUrl}`, dto).pipe(map(mapEvent));
  }

  getEventById(eventId: string): Observable<SportEvent | null> {
    return this.http.get<any>(`${this.apiUrl}/${eventId}`).pipe(
      map(mapEvent),
      catchError(() => EMPTY),
    );
  }

  joinEvent(
    eventId: string,
    userId: string,
    profile?: { displayName?: string | null; photoURL?: string | null; distanceKm?: number },
  ): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/${eventId}/join`, { userId, profile });
  }

  leaveEvent(eventId: string, userId: string): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/${eventId}/leave`, { userId });
  }

  getAttendances(eventId: string): Observable<Attendance[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${eventId}/attendances`).pipe(
      map(list => list.map(a => ({
        userId:      a.userId,
        status:      a.status,
        joinedAt:    a.joinedAt,
        displayName: a.user?.displayName ?? a.displayName ?? null,
        photoURL:    a.user?.photoURL    ?? a.photoURL    ?? null,
        distanceKm:  a.distanceKm       ?? null,
      } as Attendance))),
    );
  }

  updateEvent(eventId: string, changes: Partial<Omit<SportEvent, 'id'>>): Observable<void> {
    // Map frontend model fields → backend DTO (Prisma only accepts known fields)
    const dto: Record<string, unknown> = {};
    if (changes.title       !== undefined) dto['title']           = changes.title;
    if (changes.description !== undefined) dto['description']     = changes.description;
    if (changes.sport       !== undefined) dto['sport']           = changes.sport;
    if (changes.location    !== undefined) dto['location']        = changes.location;
    if (changes.maxParticipants !== undefined) dto['maxParticipants'] = changes.maxParticipants;
    if (changes.status      !== undefined) dto['status']          = changes.status;
    if (changes.lat         !== undefined) dto['latitude']        = changes.lat;
    if (changes.lng         !== undefined) dto['longitude']       = changes.lng;
    if (changes.dateISO && changes.time) {
      dto['startTime'] = new Date(`${changes.dateISO}T${changes.time}:00`).toISOString();
    }
    return this.http.put<void>(`${this.apiUrl}/${eventId}`, dto);
  }

  deleteEvent(eventId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${eventId}`);
  }
}
