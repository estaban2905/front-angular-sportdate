// store/events/events.state.ts
import { inject, Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { EventRepository } from '@core/repositories/abstractions/event.repository';
import { EventsStateModel } from './events.model';
import { EVENTS_STATE_DEFAULTS } from './events.constants';
import { EventsActions } from './events.actions';

@State<EventsStateModel>({
  name: 'events',
  defaults: EVENTS_STATE_DEFAULTS,
})
@Injectable()
export class EventsState {
  private readonly repo = inject(EventRepository);

  @Action(EventsActions.LoadEvents)
  loadEvents(ctx: StateContext<EventsStateModel>) {
    ctx.patchState({ loading: true });
    return this.repo.getEvents().pipe(
      tap({
        next: events => ctx.patchState({ events, loading: false }),
        error: () => ctx.patchState({ loading: false }),
      }),
    );
  }

  @Action(EventsActions.LoadChallenges)
  loadChallenges(ctx: StateContext<EventsStateModel>) {
    return this.repo.getChallenges().pipe(
      tap({ next: challenges => ctx.patchState({ challenges }) }),
    );
  }
}
