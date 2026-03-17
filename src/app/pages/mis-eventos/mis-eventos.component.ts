/**
 * pages/mis-eventos/mis-eventos.component.ts
 *
 * "Mis Eventos" page. Shows two tabs:
 *  - Asistiendo: events where the current user is a confirmed participant
 *  - Creados:    events created by the current user
 */

import { Component, inject, OnInit, computed } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { LucideAngularModule, Calendar, MapPin, Clock, Users, Plus, ArrowLeft } from 'lucide-angular';
import { EventsSelectors, EventsActions } from '@store/events';
import { AuthSelectors } from '@store/auth';
import { SportEvent } from '@core/models';
import { APP_ROUTES } from '@app/constants/app-routing.constants';

type Tab = 'asistiendo' | 'creados';

@Component({
  selector: 'app-mis-eventos',
  templateUrl: './mis-eventos.component.html',
  imports: [LucideAngularModule],
})
export class MisEventosComponent implements OnInit {
  readonly calendarIcon  = Calendar;
  readonly mapPinIcon    = MapPin;
  readonly clockIcon     = Clock;
  readonly usersIcon     = Users;
  readonly plusIcon      = Plus;
  readonly arrowLeftIcon = ArrowLeft;

  private readonly store  = inject(Store);
  private readonly router = inject(Router);

  readonly loading     = this.store.selectSignal(EventsSelectors.loading);
  readonly currentUser = this.store.selectSignal(AuthSelectors.user);

  private readonly allEvents = this.store.selectSignal(EventsSelectors.events);

  readonly attending = computed<SportEvent[]>(() => {
    const uid = this.currentUser()?.uid;
    if (!uid) return [];
    return this.allEvents().filter(e => (e.participantIds ?? []).includes(uid));
  });

  readonly created = computed<SportEvent[]>(() => {
    const uid = this.currentUser()?.uid;
    if (!uid) return [];
    return this.allEvents().filter(e => e.createdBy === uid);
  });

  activeTab: Tab = 'asistiendo';

  ngOnInit(): void {
    this.store.dispatch(new EventsActions.LoadEvents());
  }

  setTab(tab: Tab): void {
    this.activeTab = tab;
  }

  openEvent(event: SportEvent): void {
    this.router.navigate([`/${APP_ROUTES.EVENTOS}`, event.id]);
  }

  goToEventos(): void {
    this.router.navigate([`/${APP_ROUTES.EVENTOS}`]);
  }

  get activeEvents(): SportEvent[] {
    return this.activeTab === 'asistiendo' ? this.attending() : this.created();
  }
}
