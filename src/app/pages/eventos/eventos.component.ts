/**
 * pages/eventos/eventos.component.ts
 */

import { Component, computed, inject, OnInit, OnDestroy, signal } from '@angular/core';
import * as L from 'leaflet';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LucideAngularModule, Calendar, MapPin, Plus, Search, Filter, X, Clock, Users, AlignLeft, BookMarked, Pencil, Trash2, ChevronLeft } from 'lucide-angular';
import { Store } from '@ngxs/store';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { EventsSelectors, EventsActions } from '@store/events';
import { AuthSelectors } from '@store/auth';
import { GeoService, PlaceSuggestion } from '@core/services/geo.service';
import { ToastService } from '@core/services/toast.service';
import { EVENT_SPORT_FILTERS, SPORTS, SPORT_CONFIG } from '@core/constants/sports.constants';
import { SportEvent } from '@core/models';
import { APP_ROUTES } from '@app/constants/app-routing.constants';
import { SPORT_EMOJI, formatDisplayDate, todayISO } from '@core/utils/sport.utils';

function blankForm() {
  return {
    title: '',
    sport: '',
    modality: '',
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

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.scss',
  imports: [LucideAngularModule, FormsModule],
})
export class EventosComponent implements OnInit, OnDestroy {
  readonly calendarIcon    = Calendar;
  readonly mapPinIcon      = MapPin;
  readonly plusIcon        = Plus;
  readonly searchIcon      = Search;
  readonly filterIcon      = Filter;
  readonly xIcon           = X;
  readonly clockIcon       = Clock;
  readonly usersIcon       = Users;
  readonly alignLeftIcon   = AlignLeft;
  readonly bookMarkedIcon  = BookMarked;
  readonly pencilIcon      = Pencil;
  readonly trash2Icon      = Trash2;
  readonly chevronLeftIcon = ChevronLeft;

  private readonly store        = inject(Store);
  private readonly router       = inject(Router);
  private readonly geoService   = inject(GeoService);
  private readonly toastService = inject(ToastService);

  private readonly allEvents   = this.store.selectSignal(EventsSelectors.events);
  private readonly currentUser = this.store.selectSignal(AuthSelectors.user);

  readonly currentUserId = computed(() => this.currentUser()?.uid ?? '');

  // ─── Sport filter ──────────────────────────────────────────────────────────
  readonly sportFilters = EVENT_SPORT_FILTERS;
  readonly activeSportFilter = signal<string>('Todos');

  readonly events = computed(() => {
    const sorted = [...this.allEvents()].sort((a, b) => b.createdAt.localeCompare(a.createdAt));
    const filter = this.activeSportFilter();
    if (filter === 'Todos') return sorted;
    return sorted.filter(e => e.sport === filter);
  });

  setFilter(filter: string): void {
    this.activeSportFilter.set(filter);
  }

  // ─── Today ISO for min-date ────────────────────────────────────────────────
  readonly todayISO = todayISO();

  readonly sportOptions = SPORTS;
  readonly sportConfig  = SPORT_CONFIG;

  /** Ordered list of sports for the visual grid (emoji + name). */
  readonly sportGrid = SPORTS.map(s => ({ name: s, emoji: SPORT_EMOJI[s] ?? '🏅' }));

  isModalOpen  = false;
  isSaving     = false;
  newEvent     = blankForm();

  // Edit modal
  isEditModalOpen = false;
  isEditSaving    = false;
  editingEventId  = '';
  editForm        = blankForm();

  // Location autocomplete (create)
  locationSuggestions: PlaceSuggestion[] = [];
  isSearchingLocations = false;

  // Location autocomplete (edit)
  editLocationSuggestions: PlaceSuggestion[] = [];
  isSearchingEditLocations = false;

  // Map
  private map: L.Map | null = null;
  private marker: L.Marker | null = null;
  private mapScrollHandler: (() => void) | null = null;
  private activeMapContainerId = 'event-location-map';

  private readonly locationSearch$     = new Subject<string>();
  private locationSub?: Subscription;

  private readonly editLocationSearch$ = new Subject<string>();
  private editLocationSub?: Subscription;

  // ─── Derived config for the CREATE form ───────────────────────────────────

  get createConfig()     { return SPORT_CONFIG[this.newEvent.sport] ?? null; }
  get createModalities() { return this.createConfig?.modalities ?? []; }
  get showCourtType()    { return !!this.createConfig?.courtTypes?.length; }
  get createCourtTypes() { return this.createConfig?.courtTypes ?? []; }
  get showLevel()        { return !!this.createConfig?.hasLevel && !!this.newEvent.sport; }

  /** Quick-select chips for participant count (create form). */
  get createPlayerChips(): number[] {
    const mod = this.createModalities.find(m => m.value === this.newEvent.modality);
    if (mod) return [mod.defaultPlayers];
    return this.createModalities.map(m => m.defaultPlayers).filter((v, i, a) => a.indexOf(v) === i);
  }

  // ─── Derived config for the EDIT form ─────────────────────────────────────

  get editConfig()     { return SPORT_CONFIG[this.editForm.sport] ?? null; }
  get editModalities() { return this.editConfig?.modalities ?? []; }
  get showEditCourtType() { return !!this.editConfig?.courtTypes?.length; }
  get editCourtTypes() { return this.editConfig?.courtTypes ?? []; }
  get showEditLevel()  { return !!this.editConfig?.hasLevel && !!this.editForm.sport; }

  /** Quick-select chips for participant count (edit form). */
  get editPlayerChips(): number[] {
    const mod = this.editModalities.find(m => m.value === this.editForm.modality);
    if (mod) return [mod.defaultPlayers];
    return this.editModalities.map(m => m.defaultPlayers).filter((v, i, a) => a.indexOf(v) === i);
  }

  // ─── Lifecycle ────────────────────────────────────────────────────────────

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
      next: suggestions => { this.locationSuggestions = suggestions; this.isSearchingLocations = false; },
      error: () => { this.isSearchingLocations = false; },
    });

    this.editLocationSub = this.editLocationSearch$.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(q => {
        if (q.length < 3) { this.editLocationSuggestions = []; return []; }
        this.isSearchingEditLocations = true;
        return this.geoService.searchPlaces(q);
      }),
    ).subscribe({
      next: suggestions => { this.editLocationSuggestions = suggestions; this.isSearchingEditLocations = false; },
      error: () => { this.isSearchingEditLocations = false; },
    });
  }

  ngOnDestroy(): void {
    this.locationSub?.unsubscribe();
    this.editLocationSub?.unsubscribe();
    this.destroyMap();
  }

  // ─── Sport / Modality selection ───────────────────────────────────────────

  selectSport(sport: string): void {
    this.newEvent.sport       = sport;
    this.newEvent.modality    = '';
    this.newEvent.courtType   = '';
    this.newEvent.level       = '';
    this.newEvent.maxParticipants = null;
  }

  selectModality(modality: string): void {
    this.newEvent.modality = modality;
    const cfg = SPORT_CONFIG[this.newEvent.sport];
    if (cfg) {
      const mod = cfg.modalities.find(m => m.value === modality);
      if (mod) this.newEvent.maxParticipants = mod.defaultPlayers;
    }
  }

  selectEditSport(sport: string): void {
    this.editForm.sport       = sport;
    this.editForm.modality    = '';
    this.editForm.courtType   = '';
    this.editForm.level       = '';
    this.editForm.maxParticipants = null;
  }

  selectEditModality(modality: string): void {
    this.editForm.modality = modality;
    const cfg = SPORT_CONFIG[this.editForm.sport];
    if (cfg) {
      const mod = cfg.modalities.find(m => m.value === modality);
      if (mod) this.editForm.maxParticipants = mod.defaultPlayers;
    }
  }

  // ─── Location ─────────────────────────────────────────────────────────────

  onLocationInput(value: string): void {
    this.newEvent.locationLat = null;
    this.newEvent.locationLng = null;
    this.locationSearch$.next(value);
  }

  selectLocation(place: PlaceSuggestion): void {
    this.newEvent.location    = place.shortName;
    this.newEvent.locationLat = place.lat;
    this.newEvent.locationLng = place.lng;
    this.locationSuggestions  = [];
    setTimeout(() => this.initMap(place.lat, place.lng, 'event-location-map'), 300);
  }

  onEditLocationInput(value: string): void {
    this.editForm.locationLat = null;
    this.editForm.locationLng = null;
    this.editLocationSearch$.next(value);
  }

  selectEditLocation(place: PlaceSuggestion): void {
    this.editForm.location    = place.shortName;
    this.editForm.locationLat = place.lat;
    this.editForm.locationLng = place.lng;
    this.editLocationSuggestions = [];
    setTimeout(() => this.initMap(place.lat, place.lng, 'event-location-map-edit'), 300);
  }

  // ─── Map ──────────────────────────────────────────────────────────────────

  private initMap(lat: number, lng: number, containerId: string): void {
    this.destroyMap();
    this.activeMapContainerId = containerId;

    const container = document.getElementById(containerId);
    if (!container) return;

    this.map = L.map(container, { zoomControl: true }).setView([lat, lng], 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(this.map);

    // Fix broken Leaflet default marker icons in Angular builds
    const markerIcon = L.icon({
      iconUrl:       'assets/leaflet/marker-icon.png',
      iconRetinaUrl: 'assets/leaflet/marker-icon-2x.png',
      shadowUrl:     'assets/leaflet/marker-shadow.png',
      iconSize:    [25, 41],
      iconAnchor:  [12, 41],
      popupAnchor: [1, -34],
      shadowSize:  [41, 41],
    });

    const isEdit = containerId === 'event-location-map-edit';
    this.marker = L.marker([lat, lng], { icon: markerIcon, draggable: true }).addTo(this.map);

    this.marker.on('dragend', () => {
      const pos = this.marker!.getLatLng();
      if (isEdit) {
        this.editForm.locationLat = pos.lat;
        this.editForm.locationLng = pos.lng;
      } else {
        this.newEvent.locationLat = pos.lat;
        this.newEvent.locationLng = pos.lng;
      }
    });

    setTimeout(() => this.map?.invalidateSize(), 100);

    const modalEl = container.closest('.overflow-y-auto');
    if (modalEl) {
      this.mapScrollHandler = () => this.map?.invalidateSize();
      modalEl.addEventListener('scroll', this.mapScrollHandler);
    }
  }

  private destroyMap(): void {
    if (this.mapScrollHandler) {
      const container = document.getElementById(this.activeMapContainerId);
      const modalEl = container?.closest('.overflow-y-auto');
      modalEl?.removeEventListener('scroll', this.mapScrollHandler);
      this.mapScrollHandler = null;
    }
    if (this.map) {
      this.map.remove();
      this.map = null;
      this.marker = null;
    }
  }

  // ─── Submit ───────────────────────────────────────────────────────────────

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
      ...(this.newEvent.modality   ? { modality:  this.newEvent.modality }   : {}),
      ...(this.newEvent.level      ? { level:     this.newEvent.level }      : {}),
      ...(this.newEvent.courtType  ? { courtType: this.newEvent.courtType }  : {}),
      participants: 0,
      maxParticipants,
      avatars: [],
      createdBy: this.currentUser()?.uid ?? '',
      createdAt: new Date().toISOString(),
      status: 'open',
    };

    this.isSaving = true;
    this.destroyMap();
    this.store.dispatch(new EventsActions.CreateEvent(payload)).subscribe({
      complete: () => {
        this.isSaving = false;
        this.isModalOpen = false;
        this.newEvent = blankForm();
        this.locationSuggestions = [];
        this.toastService.success('¡Evento publicado con éxito! 🎉');
      },
      error: () => {
        this.isSaving = false;
        this.toastService.error('Error al publicar el evento. Intenta de nuevo.');
      },
    });
  }

  closeModal(): void {
    this.destroyMap();
    this.isModalOpen = false;
    this.newEvent = blankForm();
    this.locationSuggestions = [];
  }

  openEditModal(event: SportEvent): void {
    this.editingEventId = event.id;
    this.editForm = {
      title:           event.title,
      sport:           event.sport,
      modality:        event.modality ?? '',
      maxParticipants: event.maxParticipants,
      date:            event.dateISO,
      time:            event.time,
      location:        event.location,
      locationLat:     event.lat ?? null,
      locationLng:     event.lng ?? null,
      description:     event.description ?? '',
      level:           event.level ?? '',
      courtType:       event.courtType ?? '',
    };
    this.isEditModalOpen = true;
    if (event.lat && event.lng) {
      setTimeout(() => this.initMap(event.lat!, event.lng!, 'event-location-map-edit'), 300);
    }
  }

  closeEditModal(): void {
    this.destroyMap();
    this.isEditModalOpen = false;
    this.isEditSaving    = false;
    this.editingEventId  = '';
    this.editForm        = blankForm();
    this.editLocationSuggestions = [];
  }

  submitEditEvent(): void {
    const { title, sport, date, time, location, maxParticipants } = this.editForm;
    if (!title || !sport || !date || !time || !location || !maxParticipants) return;

    const changes: Partial<Omit<SportEvent, 'id'>> = {
      title,
      sport,
      sportEmoji: SPORT_EMOJI[sport] ?? '🏅',
      date: formatDisplayDate(date),
      dateISO: date,
      time,
      location,
      maxParticipants,
      description: this.editForm.description,
      modality:  this.editForm.modality,
      level:     this.editForm.level,
      courtType: this.editForm.courtType,
      ...(this.editForm.locationLat != null ? { lat: this.editForm.locationLat } : {}),
      ...(this.editForm.locationLng != null ? { lng: this.editForm.locationLng } : {}),
    };

    this.isEditSaving = true;
    this.store.dispatch(new EventsActions.UpdateEvent(this.editingEventId, changes)).subscribe({
      complete: () => {
        this.isEditSaving = false;
        this.closeEditModal();
        this.toastService.success('Evento actualizado correctamente ✅');
      },
      error: () => {
        this.isEditSaving = false;
        this.toastService.error('Error al actualizar el evento. Intenta de nuevo.');
      },
    });
  }

  deleteEvent(event: SportEvent): void {
    if (!confirm(`¿Eliminar el evento "${event.title}"?`)) return;
    this.store.dispatch(new EventsActions.DeleteEvent(event.id)).subscribe({
      complete: () => this.toastService.success(`Evento "${event.title}" eliminado.`),
      error: () => this.toastService.error('Error al eliminar el evento.'),
    });
  }

  openEvent(event: SportEvent): void {
    this.router.navigate([`/${APP_ROUTES.EVENTOS}`, event.id]);
  }

  goToMisEventos(): void {
    this.router.navigate([`/${APP_ROUTES.MIS_EVENTOS}`]);
  }
}
