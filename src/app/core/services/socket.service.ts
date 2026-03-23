import { Injectable, OnDestroy } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable, Subject } from 'rxjs';
import { environment } from '@environments/environment';

@Injectable({ providedIn: 'root' })
export class SocketService implements OnDestroy {
  private socket: Socket | null = null;
  private readonly baseUrl = environment.apiUrl.replace('/api/v1', '');

  connect(userId: string) {
    if (this.socket?.connected) return;

    this.socket = io(`${this.baseUrl}/notifications`, {
      query: { userId },
      transports: ['websocket'],
      autoConnect: true,
    });
  }

  disconnect() {
    this.socket?.disconnect();
    this.socket = null;
  }

  on<T>(event: string): Observable<T> {
    return new Observable(observer => {
      this.socket?.on(event, (data: T) => observer.next(data));
      return () => this.socket?.off(event);
    });
  }

  ngOnDestroy() {
    this.disconnect();
  }
}
