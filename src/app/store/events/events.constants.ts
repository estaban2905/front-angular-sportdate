// store/events/events.constants.ts
import { EventsStateModel } from './events.model';

export const EVENTS_STATE_DEFAULTS: EventsStateModel = {
  events: [],
  challenges: [],
  selectedEvent: null,
  attendances: [],
  loading: false,
};
