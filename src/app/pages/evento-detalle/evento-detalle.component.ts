/**
 * pages/evento-detalle/evento-detalle.component.ts
 *
 * Event detail page. Shows full event info, participant list,
 * and allows the current user to confirm or cancel attendance.
 * Owners can also edit or delete the event.
 */

import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { DecimalPipe, SlicePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Subject, Subscription } from 'rxjs';
import { takeUntil, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import * as L from 'leaflet';
import {
  LucideAngularModule,
  ArrowLeft, Calendar, MapPin, Clock, Users, ChevronRight,
  CheckCircle, XCircle, Award, AlertCircle, Pencil, Trash2,
  AlignLeft, X,
} from 'lucide-angular';
import { EventsSelectors, EventsActions } from '@store/events';
import { AuthSelectors } from '@store/auth';
import { GeoService, PlaceSuggestion } from '@core/services/geo.service';
import { ToastService } from '@core/services/toast.service';
import { SPORTS } from '@core/constants/sports.constants';
import { SportEvent } from '@core/models';
import { APP_ROUTES } from '@app/constants/app-routing.constants';
import { SPORT_EMOJI, formatDisplayDate, todayISO } from '@core/utils/sport.utils';

const COURT_TYPE_SPORTS = new Set(['Fútbol', 'Tenis', 'Padel', 'Baloncesto']);

function blankEditForm() {
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

const AVATAR_COLORS = [
  'bg-red-400', 'bg-blue-400', 'bg-green-400', 'bg-orange-400',
  'bg-purple-400', 'bg-pink-400', 'bg-teal-400', 'bg-yellow-400',
  'bg-cyan-400', 'bg-indigo-400',
];

@Component({
  selector: 'app-evento-detalle',
  templateUrl: './evento-detalle.component.html',
  imports: [LucideAngularModule, SlicePipe, DecimalPipe, FormsModule],
})
export class EventoDetalleComponent implements OnInit, OnDestroy {
  readonly arrowLeftIcon  = ArrowLeft;
  readonly calendarIcon   = Calendar;
  readonly mapPinIcon     = MapPin;
  readonly clockIcon      = Clock;
  readonly usersIcon      = Users;
  readonly chevronIcon    = ChevronRight;
  readonly checkIcon      = CheckCircle;
  readonly xCircleIcon    = XCircle;
  readonly awardIcon      = Award;
  readonly alertIcon      = AlertCircle;
  readonly pencilIcon     = Pencil;
  readonly trash2Icon     = Trash2;
  readonly alignLeftIcon  = AlignLeft;
  readonly xIcon          = X;

  private readonly store        = inject(Store);
  private readonly route        = inject(ActivatedRoute);
  private readonly router       = inject(Router);
  private readonly geoService   = inject(GeoService);
  private readonly toastService = inject(ToastService);
  private readonly destroy$     = new Subject<void>();

  readonly todayISO = todayISO();

  readonly event        = this.store.selectSignal(EventsSelectors.selectedEvent);
  readonly attendances  = this.store.selectSignal(EventsSelectors.attendances);
  readonly loading      = this.store.selectSignal(EventsSelectors.loading);
  readonly currentUser  = this.store.selectSignal(AuthSelectors.user);

  readonly sportOptions = SPORTS;

  /** True while a join operation (geolocation + HTTP + Firestore write) is in flight. */
  isJoining = false;

  // Edit modal
  isEditModalOpen = false;
  editForm        = blankEditForm();

  // Location autocomplete
  editLocationSuggestions: PlaceSuggestion[] = [];
  isSearchingEditLocations = false;

  // Map
  private map: L.Map | null = null;
  private marker: L.Marker | null = null;
  private mapScrollHandler: (() => void) | null = null;

  private readonly editLocationSearch$ = new Subject<string>();
  private editLocationSub?: Subscription;

  get isJoined(): boolean {
    const uid = this.currentUser()?.uid;
    return !!uid && this.attendances().some(a => a.userId === uid);
  }

  get isFull(): boolean {
    const e = this.event();
    return !!e && e.participants >= e.maxParticipants;
  }

  get isOwner(): boolean {
    return this.event()?.createdBy === this.currentUser()?.uid;
  }

  get showEditCourtType(): boolean { return COURT_TYPE_SPORTS.has(this.editForm.sport); }
  get showEditLevel(): boolean     { return this.editForm.sport !== ''; }

  get participantAvatarColor(): (index: number) => string {
    return (i: number) => AVATAR_COLORS[i % AVATAR_COLORS.length];
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(takeUntil(this.destroy$)).subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.store.dispatch([
          new EventsActions.LoadEventDetail(id),
          new EventsActions.LoadAttendances(id),
        ]);
      }
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
      next: suggestions => {
        this.editLocationSuggestions = suggestions;
        this.isSearchingEditLocations = false;
      },
      error: () => { this.isSearchingEditLocations = false; },
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.editLocationSub?.unsubscribe();
    this.destroyMap();
  }

  join(): void {
    if (this.isJoining || this.isJoined) return;
    const id = this.event()?.id;
    if (!id) return;
    this.isJoining = true;
    this.store.dispatch(new EventsActions.JoinEvent(id)).subscribe({
      complete: () => {
        this.isJoining = false;
        this.toastService.success('¡Te uniste al evento! 🎉');
      },
      error: () => {
        this.isJoining = false;
        this.toastService.error('Error al unirte al evento. Intenta de nuevo.');
      },
    });
  }

  leave(): void {
    const id = this.event()?.id;
    if (!id) return;
    this.store.dispatch(new EventsActions.LeaveEvent(id)).subscribe({
      complete: () => this.toastService.info('Has salido del evento.'),
      error: () => this.toastService.error('Error al salir del evento.'),
    });
  }

  goBack(): void {
    this.router.navigate([`/${APP_ROUTES.EVENTOS}`]);
  }

  get confirmedCount(): number {
    return this.attendances().filter(a => a.status === 'confirmed').length;
  }

  // ── Edit ──────────────────────────────────────────────────────────────────

  openEditModal(): void {
    const e = this.event();
    if (!e) return;
    this.editForm = {
      title:           e.title,
      sport:           e.sport,
      maxParticipants: e.maxParticipants,
      date:            e.dateISO,
      time:            e.time,
      location:        e.location,
      locationLat:     e.lat ?? null,
      locationLng:     e.lng ?? null,
      description:     e.description ?? '',
      level:           e.level ?? '',
      courtType:       e.courtType ?? '',
    };
    this.isEditModalOpen = true;
    if (e.lat && e.lng) {
      setTimeout(() => this.initMap(e.lat!, e.lng!), 300);
    }
  }

  closeEditModal(): void {
    this.destroyMap();
    this.isEditModalOpen = false;
    this.editForm = blankEditForm();
    this.editLocationSuggestions = [];
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
    setTimeout(() => this.initMap(place.lat, place.lng), 300);
  }

  submitEditEvent(): void {
    const { title, sport, date, time, location, maxParticipants } = this.editForm;
    if (!title || !sport || !date || !time || !location || !maxParticipants) return;
    const id = this.event()?.id;
    if (!id) return;

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
      level: this.editForm.level,
      courtType: this.editForm.courtType,
      ...(this.editForm.locationLat != null ? { lat: this.editForm.locationLat } : {}),
      ...(this.editForm.locationLng != null ? { lng: this.editForm.locationLng } : {}),
    };

    this.store.dispatch(new EventsActions.UpdateEvent(id, changes)).subscribe({
      complete: () => {
        this.closeEditModal();
        this.toastService.success('Evento actualizado correctamente ✅');
      },
      error: () => this.toastService.error('Error al actualizar el evento.'),
    });
  }

  deleteEvent(): void {
    const e = this.event();
    if (!e) return;
    if (!confirm(`¿Eliminar el evento "${e.title}"?`)) return;
    this.store.dispatch(new EventsActions.DeleteEvent(e.id)).subscribe({
      complete: () => {
        this.toastService.success(`Evento eliminado.`);
        this.router.navigate([`/${APP_ROUTES.EVENTOS}`]);
      },
      error: () => this.toastService.error('Error al eliminar el evento.'),
    });
  }

  // ── Map ───────────────────────────────────────────────────────────────────

  private initMap(lat: number, lng: number): void {
    this.destroyMap();
    const container = document.getElementById('detalle-location-map');
    if (!container) return;

    this.map = L.map(container, { zoomControl: true }).setView([lat, lng], 15);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(this.map);

    const markerIcon = L.icon({
      iconUrl:       'assets/leaflet/marker-icon.png',
      iconRetinaUrl: 'assets/leaflet/marker-icon-2x.png',
      shadowUrl:     'assets/leaflet/marker-shadow.png',
      iconSize:    [25, 41],
      iconAnchor:  [12, 41],
      popupAnchor: [1, -34],
      shadowSize:  [41, 41],
    });
    this.marker = L.marker([lat, lng], { icon: markerIcon, draggable: true }).addTo(this.map);
    this.marker.on('dragend', () => {
      const pos = this.marker!.getLatLng();
      this.editForm.locationLat = pos.lat;
      this.editForm.locationLng = pos.lng;
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
      const container = document.getElementById('detalle-location-map');
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
}
