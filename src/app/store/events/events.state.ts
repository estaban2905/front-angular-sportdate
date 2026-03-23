// store/events/events.state.ts
import { inject, Injectable } from '@angular/core';
import { State, Action, StateContext, Store } from '@ngxs/store';
import { switchMap, tap } from 'rxjs/operators';
import { EventRepository } from '@core/repositories/abstractions/event.repository';
import { LoadEventsPageUseCase } from '@core/use-cases/events/load-events-page.use-case';
import { GeoService } from '@core/services/geo.service';
import { AuthSelectors } from '@store/auth';
import { EventsStateModel } from './events.model';
import { EVENTS_STATE_DEFAULTS } from './events.constants';
import { EventsActions } from './events.actions';
import { EventsSelectors } from './events.selectors';

@State<EventsStateModel>({
  name: 'events',
  defaults: EVENTS_STATE_DEFAULTS,
})
@Injectable()
export class EventsState {
  private readonly repo = inject(EventRepository);
  private readonly loadEventsPageUseCase = inject(LoadEventsPageUseCase);
  private readonly geoService = inject(GeoService);
  private readonly store = inject(Store);

  /**
   * Loads events and challenges concurrently via the use case.
   * Use this action when both are needed (Eventos page, Dashboard).
   */
  @Action(EventsActions.LoadEventsPage)
  loadEventsPage(ctx: StateContext<EventsStateModel>) {
    ctx.patchState({ loading: true });
    return this.loadEventsPageUseCase.execute().pipe(
      tap({
        next: ({ events, challenges }) =>
          ctx.patchState({ events, challenges, loading: false }),
        error: () => ctx.patchState({ loading: false }),
      }),
    );
  }

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

  @Action(EventsActions.CreateEvent)
  createEvent(ctx: StateContext<EventsStateModel>, action: EventsActions.CreateEvent) {
    const authUser = this.store.selectSnapshot(AuthSelectors.user);
    if (!authUser?.uid) return;
    const profile = { displayName: authUser.displayName, photoURL: authUser.photoURL };
    const { location, lat, lng } = action.event;
    const eventCoords = lat && lng ? { lat, lng } : undefined;
    return this.repo.createEvent(action.event).pipe(
      switchMap(event =>
        this.geoService.distanceToEvent(eventCoords, location).pipe(
          switchMap(distanceKm =>
            this.repo.joinEvent(event.id, authUser.uid, {
              ...profile,
              ...(distanceKm != null ? { distanceKm: distanceKm as number } : {}),
            }).pipe(
              tap(() => {
                // Add the new event to the top of the list immediately
                ctx.patchState({ events: [event, ...ctx.getState().events] });
              }),
            ),
          ),
        ),
      ),
    );
  }

  @Action(EventsActions.LoadEventDetail)
  loadEventDetail(ctx: StateContext<EventsStateModel>, action: EventsActions.LoadEventDetail) {
    ctx.patchState({ loading: true, selectedEvent: null });
    return this.repo.getEventById(action.eventId).pipe(
      tap({
        next: selectedEvent => ctx.patchState({ selectedEvent, loading: false }),
        error: () => ctx.patchState({ loading: false }),
      }),
    );
  }

  @Action(EventsActions.LoadAttendances)
  loadAttendances(ctx: StateContext<EventsStateModel>, action: EventsActions.LoadAttendances) {
    return this.repo.getAttendances(action.eventId).pipe(
      tap({ next: attendances => ctx.patchState({ attendances }) }),
    );
  }

  @Action(EventsActions.JoinEvent)
  joinEvent(ctx: StateContext<EventsStateModel>, action: EventsActions.JoinEvent) {
    const authUser = this.store.selectSnapshot(AuthSelectors.user);
    if (!authUser?.uid) return;

    const selectedEvent = this.store.selectSnapshot(EventsSelectors.selectedEvent);
    if ((selectedEvent?.participantIds ?? []).includes(authUser.uid)) return;

    const profile = { displayName: authUser.displayName, photoURL: authUser.photoURL };
    const eventLocation = selectedEvent?.location ?? '';
    const eventCoords =
      selectedEvent?.lat && selectedEvent?.lng
        ? { lat: selectedEvent.lat, lng: selectedEvent.lng }
        : undefined;

    return this.geoService.distanceToEvent(eventCoords, eventLocation).pipe(
      switchMap(distanceKm =>
        this.repo.joinEvent(action.eventId, authUser.uid, {
          ...profile,
          ...(distanceKm != null ? { distanceKm: distanceKm as number } : {}),
        }),
      ),
      switchMap(() => ctx.dispatch([
        new EventsActions.LoadEventDetail(action.eventId),
        new EventsActions.LoadAttendances(action.eventId),
      ])),
    );
  }

  @Action(EventsActions.LeaveEvent)
  leaveEvent(ctx: StateContext<EventsStateModel>, action: EventsActions.LeaveEvent) {
    const userId = this.store.selectSnapshot(AuthSelectors.user)?.uid;
    if (!userId) return;
    return this.repo.leaveEvent(action.eventId, userId).pipe(
      switchMap(() => ctx.dispatch([
        new EventsActions.LoadEventDetail(action.eventId),
        new EventsActions.LoadAttendances(action.eventId),
      ])),
    );
  }

  @Action(EventsActions.UpdateEvent)
  updateEvent(ctx: StateContext<EventsStateModel>, action: EventsActions.UpdateEvent) {
    return this.repo.updateEvent(action.eventId, action.changes).pipe(
      switchMap(() => ctx.dispatch([
        new EventsActions.LoadEventDetail(action.eventId),
        new EventsActions.LoadEvents(),
      ])),
    );
  }

  @Action(EventsActions.DeleteEvent)
  deleteEvent(ctx: StateContext<EventsStateModel>, action: EventsActions.DeleteEvent) {
    return this.repo.deleteEvent(action.eventId).pipe(
      tap(() => {
        const events = ctx.getState().events.filter(e => e.id !== action.eventId);
        ctx.patchState({ events });
      }),
    );
  }
}
