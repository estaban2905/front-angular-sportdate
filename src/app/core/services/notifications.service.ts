import { Injectable, inject, signal, computed, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '@environments/environment';
import { AppNotification } from '@core/models';
import { SocketService } from './socket.service';

@Injectable({ providedIn: 'root' })
export class NotificationsService implements OnDestroy {
  private readonly http = inject(HttpClient);
  private readonly socketService = inject(SocketService);
  private readonly apiUrl = `${environment.apiUrl}/notifications`;

  readonly notifications = signal<AppNotification[]>([]);
  readonly unreadCount = computed(() => this.notifications().filter(n => !n.read).length);

  private socketSub: Subscription | null = null;

  /** Connect the socket and start listening for real-time notifications */
  connectSocket(userId: string) {
    this.socketService.connect(userId);
    this.socketSub = this.socketService.on<AppNotification>('notification').subscribe(notif => {
      // Prepend the new notification to the top of the list
      this.notifications.update(list => [notif, ...list]);
    });
  }

  disconnectSocket() {
    this.socketSub?.unsubscribe();
    this.socketService.disconnect();
  }

  load() {
    return this.http.get<AppNotification[]>(this.apiUrl).pipe(
      tap(notifs => this.notifications.set(notifs)),
    );
  }

  markAsRead(id: string) {
    return this.http.patch<void>(`${this.apiUrl}/${id}/read`, {}).pipe(
      tap(() => {
        this.notifications.update(list =>
          list.map(n => n.id === id ? { ...n, read: true } : n),
        );
      }),
    );
  }

  markAllAsRead() {
    return this.http.patch<void>(`${this.apiUrl}/read-all`, {}).pipe(
      tap(() => {
        this.notifications.update(list => list.map(n => ({ ...n, read: true })));
      }),
    );
  }

  ngOnDestroy() {
    this.disconnectSocket();
  }
}
