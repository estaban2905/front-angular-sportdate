/**
 * core/repositories/in-memory/in-memory-event.repository.ts
 *
 * In-memory implementation of EventRepository.
 * Uses BehaviorSubject to emit updates reactively (mirrors Firestore's onSnapshot).
 */

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { EventRepository } from '../abstractions/event.repository';
import { SportEvent, Challenge, Attendance } from '../../models';
import { MOCK_EVENTS, MOCK_CHALLENGES, MOCK_ATTENDANCES } from './mock-data';

@Injectable()
export class InMemoryEventRepository extends EventRepository {
  private readonly events$ = new BehaviorSubject<SportEvent[]>(
    MOCK_EVENTS.map(e => ({ ...e })),
  );
  private readonly attendances = new Map<string, BehaviorSubject<Attendance[]>>(
    Object.entries(MOCK_ATTENDANCES).map(([eventId, list]) => [
      eventId,
      new BehaviorSubject<Attendance[]>(list.map(a => ({ ...a }))),
    ]),
  );

  private get events(): SportEvent[] {
    return this.events$.getValue();
  }

  getEvents(): Observable<SportEvent[]> {
    return this.events$.asObservable().pipe(delay(300));
  }

  getEventById(eventId: string): Observable<SportEvent | null> {
    return this.events$.pipe(
      map(events => events.find(e => e.id === eventId) ?? null),
      delay(200),
    );
  }

  getChallenges(): Observable<Challenge[]> {
    return of(MOCK_CHALLENGES).pipe(delay(300));
  }

  createEvent(event: Omit<SportEvent, 'id'>): Observable<SportEvent> {
    const created: SportEvent = { ...event, id: `e${Date.now()}` };
    this.events$.next([...this.events, created]);
    return of(created).pipe(delay(300), map(() => created));
  }

  joinEvent(
    eventId: string,
    userId: string,
    profile?: { displayName?: string | null; photoURL?: string | null; distanceKm?: number },
  ): Observable<void> {
    const idx = this.events.findIndex(e => e.id === eventId);
    if (idx !== -1) {
      const e = this.events[idx];
      const updated = [...this.events];
      updated[idx] = {
        ...e,
        participants: e.participants + 1,
        participantIds: [...(e.participantIds ?? []), userId],
      };
      this.events$.next(updated);

      const sub = this.getAttendanceSubject(eventId);
      const list = sub.getValue();
      sub.next([
        ...list.filter(a => a.userId !== userId),
        {
          userId,
          status: 'confirmed',
          joinedAt: new Date().toISOString(),
          displayName: profile?.displayName ?? null,
          photoURL: profile?.photoURL ?? null,
          ...(profile?.distanceKm != null ? { distanceKm: profile.distanceKm } : {}),
        },
      ]);
    }
    return of(undefined).pipe(delay(200));
  }

  leaveEvent(eventId: string, userId: string): Observable<void> {
    const idx = this.events.findIndex(e => e.id === eventId);
    if (idx !== -1) {
      const e = this.events[idx];
      const updated = [...this.events];
      updated[idx] = {
        ...e,
        participants: Math.max(0, e.participants - 1),
        participantIds: (e.participantIds ?? []).filter(id => id !== userId),
      };
      this.events$.next(updated);

      const sub = this.getAttendanceSubject(eventId);
      sub.next(sub.getValue().map(a => a.userId === userId ? { ...a, status: 'cancelled' } : a));
    }
    return of(undefined).pipe(delay(200));
  }

  getAttendances(eventId: string): Observable<Attendance[]> {
    return this.getAttendanceSubject(eventId).asObservable().pipe(delay(200));
  }

  updateEvent(eventId: string, changes: Partial<Omit<SportEvent, 'id'>>): Observable<void> {
    const idx = this.events.findIndex(e => e.id === eventId);
    if (idx !== -1) {
      const updated = [...this.events];
      updated[idx] = { ...updated[idx], ...changes };
      this.events$.next(updated);
    }
    return of(undefined).pipe(delay(200));
  }

  deleteEvent(eventId: string): Observable<void> {
    this.events$.next(this.events.filter(e => e.id !== eventId));
    return of(undefined).pipe(delay(200));
  }

  private getAttendanceSubject(eventId: string): BehaviorSubject<Attendance[]> {
    if (!this.attendances.has(eventId)) {
      this.attendances.set(eventId, new BehaviorSubject<Attendance[]>([]));
    }
    return this.attendances.get(eventId)!;
  }
}
