// store/events/events.model.ts
import { SportEvent, Challenge, Attendance } from '@core/models';

export interface EventsStateModel {
  events: SportEvent[];
  challenges: Challenge[];
  selectedEvent: SportEvent | null;
  attendances: Attendance[];
  loading: boolean;
}
