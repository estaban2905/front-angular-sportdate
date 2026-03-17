// store/events/events.selectors.ts
import { Selector } from '@ngxs/store';
import { EventsState } from './events.state';
import { EventsStateModel } from './events.model';

export class EventsSelectors {
  @Selector([EventsState])
  static events(state: EventsStateModel) {
    return state.events;
  }

  @Selector([EventsState])
  static challenges(state: EventsStateModel) {
    return state.challenges;
  }

  @Selector([EventsState])
  static loading(state: EventsStateModel) {
    return state.loading;
  }

  @Selector([EventsState])
  static selectedEvent(state: EventsStateModel) {
    return state.selectedEvent;
  }

  @Selector([EventsState])
  static attendances(state: EventsStateModel) {
    return state.attendances;
  }
}
