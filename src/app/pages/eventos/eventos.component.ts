/**
 * pages/eventos/eventos.component.ts
 */

import { Component, computed, inject, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LucideAngularModule, Calendar, MapPin, Plus, Search, Filter, X, Clock, Users, AlignLeft, BookMarked } from 'lucide-angular';
import { Store } from '@ngxs/store';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { EventsSelectors, EventsActions } from '@store/events';
import { AuthSelectors } from '@store/auth';
import { GeoService, PlaceSuggestion } from '@core/services/geo.service';
import { EVENT_SPORT_FILTERS, SPORTS } from '@core/constants/sports.constants';
import { SportEvent } from '@core/models';
import { APP_ROUTES } from '@app/constants/app-routing.constants';

const SPORT_EMOJI: Record<string, string> = {
  'Fútbol':     '⚽',
  'Running':    '🏃',
  'Yoga':       '🧘',
  'Padel':      '🎾',
  'Trekking':   '🏔️',
  'Crossfit':   '🏋️',
  'Baloncesto': '🏀',
  'Ciclismo':   '🚴',
  'Natación':   '🏊',
  'Tenis':      '🎾',
};

const COURT_TYPE_SPORTS = new Set(['Fútbol', 'Tenis', 'Padel', 'Baloncesto']);

function blankForm() {
  return {
    title: '',
    sport: '',
    maxParticipants: null as number | null,
    date: '',
    time: '',
    location: '',
    locationLat: null as number | null,
    locationLng: null as number | null,
    description: '',
    level: '',
    courtType: '',
  };
}

function formatDisplayDate(isoDate: string): string {
  const d = new Date(`${isoDate}T12:00:00`);
  const days = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
  const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
  return `${days[d.getDay()]} ${d.getDate()} ${months[d.getMonth()]}`;
}

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.scss',
  imports: [LucideAngularModule, FormsModule],
})
export class EventosComponent implements OnInit, OnDestroy {
  readonly calendarIcon  = Calendar;
  readonly mapPinIcon    = MapPin;
  readonly plusIcon      = Plus;
  readonly searchIcon    = Search;
  readonly filterIcon    = Filter;
  readonly xIcon         = X;
  readonly clockIcon     = Clock;
  readonly usersIcon     = Users;
  readonly alignLeftIcon = AlignLeft;
  readonly bookMarkedIcon = BookMarked;

  private readonly store     = inject(Store);
  private readonly router    = inject(Router);
  private readonly geoService = inject(GeoService);

  private readonly allEvents   = this.store.selectSignal(EventsSelectors.events);
  private readonly currentUser = this.store.selectSignal(AuthSelectors.user);

  readonly currentUserId = computed(() => this.currentUser()?.uid ?? '');
  readonly events = computed(() =>
    [...this.allEvents()].sort((a, b) => b.createdAt.localeCompare(a.createdAt)),
  );

  readonly sportFilters = EVENT_SPORT_FILTERS;
  readonly sportOptions = SPORTS;

  isModalOpen  = false;
  isSaving     = false;
  selectedSport = '';
  newEvent     = blankForm();

  // Location autocomplete
  locationSuggestions: PlaceSuggestion[] = [];
  isSearchingLocations = false;

  private readonly locationSearch$ = new Subject<string>();
  private locationSub?: Subscription;

  get showCourtType(): boolean { return COURT_TYPE_SPORTS.has(this.newEvent.sport); }
  get showLevel(): boolean     { return this.newEvent.sport !== ''; }

  ngOnInit(): void {
    this.store.dispatch(new EventsActions.LoadEvents());

    this.locationSub = this.locationSearch$.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(q => {
        if (q.length < 3) { this.locationSuggestions = []; return []; }
        this.isSearchingLocations = true;
        return this.geoService.searchPlaces(q);
      }),
    ).subscribe({
      next: suggestions => {
        this.locationSuggestions = suggestions;
        this.isSearchingLocations = false;
      },
      error: () => { this.isSearchingLocations = false; },
    });
  }

  ngOnDestroy(): void {
    this.locationSub?.unsubscribe();
  }

  onLocationInput(value: string): void {
    // Clear stored coords when user types a new value manually
    this.newEvent.locationLat = null;
    this.newEvent.locationLng = null;
    this.locationSearch$.next(value);
  }

  selectLocation(place: PlaceSuggestion): void {
    this.newEvent.location    = place.shortName;
    this.newEvent.locationLat = place.lat;
    this.newEvent.locationLng = place.lng;
    this.locationSuggestions  = [];
  }

  submitEvent(): void {
    const { title, sport, date, time, location, maxParticipants } = this.newEvent;
    if (!title || !sport || !date || !time || !location || !maxParticipants) return;

    const payload: Omit<SportEvent, 'id'> = {
      title,
      sport,
      sportEmoji: SPORT_EMOJI[sport] ?? '🏅',
      date: formatDisplayDate(date),
      dateISO: date,
      time,
      location,
      ...(this.newEvent.locationLat != null ? { lat: this.newEvent.locationLat } : {}),
      ...(this.newEvent.locationLng != null ? { lng: this.newEvent.locationLng } : {}),
      description: this.newEvent.description,
      ...(this.newEvent.level     ? { level: this.newEvent.level }         : {}),
      ...(this.newEvent.courtType ? { courtType: this.newEvent.courtType } : {}),
      participants: 0,
      maxParticipants,
      avatars: [],
      createdBy: this.currentUser()?.uid ?? '',
      createdAt: new Date().toISOString(),
      status: 'open',
    };

    this.isSaving = true;
    this.store.dispatch(new EventsActions.CreateEvent(payload));
    this.isModalOpen = false;
    this.isSaving = false;
    this.newEvent = blankForm();
    this.locationSuggestions = [];
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.newEvent = blankForm();
    this.locationSuggestions = [];
  }

  openEvent(event: SportEvent): void {
    this.router.navigate([`/${APP_ROUTES.EVENTOS}`, event.id]);
  }

  goToMisEventos(): void {
    this.router.navigate([`/${APP_ROUTES.MIS_EVENTOS}`]);
  }
}
