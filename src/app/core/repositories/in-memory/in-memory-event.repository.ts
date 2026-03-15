/**
 * core/repositories/in-memory/in-memory-event.repository.ts
 *
 * In-memory implementation of EventRepository.
 * Simulates async HTTP behaviour with of() + delay(300).
 */

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { EventRepository } from '../abstractions/event.repository';
import { SportEvent, Challenge } from '../../models';
import { MOCK_EVENTS, MOCK_CHALLENGES } from './mock-data';

@Injectable()
export class InMemoryEventRepository extends EventRepository {
  /** Returns mock SportEvent list after a simulated 300 ms network delay. */
  getEvents(): Observable<SportEvent[]> {
    return of(MOCK_EVENTS).pipe(delay(300));
  }

  /** Returns mock Challenge list after a simulated 300 ms network delay. */
  getChallenges(): Observable<Challenge[]> {
    return of(MOCK_CHALLENGES).pipe(delay(300));
  }
}
