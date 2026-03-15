/**
 * pages/eventos/eventos.component.ts
 *
 * Eventos (Sport Events) page.
 * Displays a filterable grid of upcoming sport events and a modal
 * for creating a new event.
 *
 * Uses inject() for all dependencies; reads events from EventsStore.
 */

import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule, Calendar, MapPin, Plus, Search, Filter, X, Clock, Users, AlignLeft } from 'lucide-angular';
import { Store } from '@ngxs/store';
import { EventsSelectors, EventsActions } from '@store/events';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.scss',
  imports: [LucideAngularModule, FormsModule],
})
export class EventosComponent implements OnInit {
  // ---------------------------------------------------------------------------
  // Icon references
  // ---------------------------------------------------------------------------
  readonly calendarIcon = Calendar;
  readonly mapPinIcon = MapPin;
  readonly plusIcon = Plus;
  readonly searchIcon = Search;
  readonly filterIcon = Filter;
  readonly xIcon = X;
  readonly clockIcon = Clock;
  readonly usersIcon = Users;
  readonly alignLeftIcon = AlignLeft;

  // ---------------------------------------------------------------------------
  // Store
  // ---------------------------------------------------------------------------
  private readonly store = inject(Store);

  readonly events = this.store.selectSignal(EventsSelectors.events);

  // ---------------------------------------------------------------------------
  // Filter / modal state
  // ---------------------------------------------------------------------------
  readonly sportFilters = ['Todos', 'Running', 'Fútbol', 'Yoga', 'Padel', 'Trekking', 'Crossfit'];
  isModalOpen = false;
  selectedSport = '';

  ngOnInit(): void {
    this.store.dispatch(new EventsActions.LoadEvents());
  }
}
