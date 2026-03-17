// store/events/events.actions.ts
// NGXS action classes for the events feature.

import { SportEvent, Challenge } from '@core/models';

export namespace EventsActions {
  export class LoadEvents {
    static readonly type = '[Events] Load Events';
  }

  export class LoadEventsSuccess {
    static readonly type = '[Events] Load Events Success';
    constructor(public events: SportEvent[]) {}
  }

  export class LoadChallenges {
    static readonly type = '[Events] Load Challenges';
  }

  export class LoadChallengesSuccess {
    static readonly type = '[Events] Load Challenges Success';
    constructor(public challenges: Challenge[]) {}
  }

  export class CreateEvent {
    static readonly type = '[Events] Create Event';
    constructor(public event: Omit<SportEvent, 'id'>) {}
  }

  export class CreateEventSuccess {
    static readonly type = '[Events] Create Event Success';
    constructor(public event: SportEvent) {}
  }

  export class SetSportFilter {
    static readonly type = '[Events] Set Sport Filter';
    constructor(public sport: string) {}
  }

  export class JoinEvent {
    static readonly type = '[Events] Join Event';
    constructor(public eventId: string) {}
  }

  export class LeaveEvent {
    static readonly type = '[Events] Leave Event';
    constructor(public eventId: string) {}
  }

  export class LoadEventDetail {
    static readonly type = '[Events] Load Event Detail';
    constructor(public eventId: string) {}
  }

  export class LoadAttendances {
    static readonly type = '[Events] Load Attendances';
    constructor(public eventId: string) {}
  }

  /**
   * Loads events and challenges concurrently via LoadEventsPageUseCase.
   * Prefer this over dispatching LoadEvents + LoadChallenges separately
   * when both are needed at the same time (e.g., Eventos page, Dashboard).
   */
  export class LoadEventsPage {
    static readonly type = '[Events] Load Events Page';
  }
}
