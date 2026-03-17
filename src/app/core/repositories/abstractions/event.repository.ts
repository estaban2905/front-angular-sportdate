/**
 * core/repositories/abstractions/event.repository.ts
 *
 * Abstract base class for the Event repository.
 * Provides Observable-based methods for fetching sport events and challenges.
 */

import { Observable } from 'rxjs';
import { SportEvent, Challenge, Attendance } from '../../models';

export abstract class EventRepository {
  abstract getEvents(): Observable<SportEvent[]>;
  abstract getEventById(eventId: string): Observable<SportEvent | null>;
  abstract getChallenges(): Observable<Challenge[]>;
  abstract createEvent(event: Omit<SportEvent, 'id'>): Observable<SportEvent>;
  abstract joinEvent(
    eventId: string,
    userId: string,
    profile?: { displayName?: string | null; photoURL?: string | null; distanceKm?: number },
  ): Observable<void>;
  abstract leaveEvent(eventId: string, userId: string): Observable<void>;
  abstract getAttendances(eventId: string): Observable<Attendance[]>;
}
