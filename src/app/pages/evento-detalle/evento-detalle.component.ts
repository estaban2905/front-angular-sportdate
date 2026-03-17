/**
 * pages/evento-detalle/evento-detalle.component.ts
 *
 * Event detail page. Shows full event info, participant list,
 * and allows the current user to confirm or cancel attendance.
 */

import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { DecimalPipe, SlicePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import {
  LucideAngularModule,
  ArrowLeft, Calendar, MapPin, Clock, Users, ChevronRight,
  CheckCircle, XCircle, Award, AlertCircle,
} from 'lucide-angular';
import { EventsSelectors, EventsActions } from '@store/events';
import { AuthSelectors } from '@store/auth';
import { APP_ROUTES } from '@app/constants/app-routing.constants';

const AVATAR_COLORS = [
  'bg-red-400', 'bg-blue-400', 'bg-green-400', 'bg-orange-400',
  'bg-purple-400', 'bg-pink-400', 'bg-teal-400', 'bg-yellow-400',
  'bg-cyan-400', 'bg-indigo-400',
];

@Component({
  selector: 'app-evento-detalle',
  templateUrl: './evento-detalle.component.html',
  imports: [LucideAngularModule, SlicePipe, DecimalPipe],
})
export class EventoDetalleComponent implements OnInit, OnDestroy {
  readonly arrowLeftIcon = ArrowLeft;
  readonly calendarIcon = Calendar;
  readonly mapPinIcon = MapPin;
  readonly clockIcon = Clock;
  readonly usersIcon = Users;
  readonly chevronIcon = ChevronRight;
  readonly checkIcon = CheckCircle;
  readonly xCircleIcon = XCircle;
  readonly awardIcon = Award;
  readonly alertIcon = AlertCircle;

  private readonly store = inject(Store);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly destroy$ = new Subject<void>();

  readonly event = this.store.selectSignal(EventsSelectors.selectedEvent);
  readonly attendances = this.store.selectSignal(EventsSelectors.attendances);
  readonly loading = this.store.selectSignal(EventsSelectors.loading);
  readonly currentUser = this.store.selectSignal(AuthSelectors.user);

  /** True while a join operation (geolocation + HTTP + Firestore write) is in flight. */
  isJoining = false;

  get isJoined(): boolean {
    const uid = this.currentUser()?.uid;
    return !!uid && (this.event()?.participantIds ?? []).includes(uid);
  }

  get isFull(): boolean {
    const e = this.event();
    return !!e && e.participants >= e.maxParticipants;
  }

  get isOwner(): boolean {
    return this.event()?.createdBy === this.currentUser()?.uid;
  }

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
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  join(): void {
    if (this.isJoining || this.isJoined) return;
    const id = this.event()?.id;
    if (!id) return;
    this.isJoining = true;
    this.store.dispatch(new EventsActions.JoinEvent(id)).subscribe({
      complete: () => (this.isJoining = false),
      error: () => (this.isJoining = false),
    });
  }

  leave(): void {
    const id = this.event()?.id;
    if (id) this.store.dispatch(new EventsActions.LeaveEvent(id));
  }

  goBack(): void {
    this.router.navigate([`/${APP_ROUTES.EVENTOS}`]);
  }

  get confirmedCount(): number {
    return this.attendances().filter(a => a.status === 'confirmed').length;
  }
}
