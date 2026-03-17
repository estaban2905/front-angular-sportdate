/**
 * core/use-cases/events/load-events-page.use-case.ts
 *
 * Orchestrates loading all data needed for the Eventos page — sport events
 * and active challenges — in parallel using forkJoin.
 *
 * Used by EventsState to populate the store with a single repository round-trip
 * initiation instead of two independent sequential calls.
 *
 * SRP: only responsible for loading and combining events-page data.
 * DIP: depends on EventRepository abstraction.
 */

import { Injectable, inject } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { EventRepository } from '@core/repositories/abstractions/event.repository';
import { SportEvent, Challenge } from '@core/models';

export interface EventsPageData {
  events: SportEvent[];
  challenges: Challenge[];
}

@Injectable({ providedIn: 'root' })
export class LoadEventsPageUseCase {
  private readonly eventRepo = inject(EventRepository);

  /**
   * Loads sport events and challenges concurrently.
   */
  execute(): Observable<EventsPageData> {
    return forkJoin({
      events: this.eventRepo.getEvents(),
      challenges: this.eventRepo.getChallenges(),
    });
  }
}
