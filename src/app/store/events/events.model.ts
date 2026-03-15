// store/events/events.model.ts
import { SportEvent, Challenge } from '@core/models';

export interface EventsStateModel {
  events: SportEvent[];
  challenges: Challenge[];
  loading: boolean;
}
