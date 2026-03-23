import { Component, OnInit, inject, signal, HostListener, Input } from '@angular/core';
import { NotificationsService } from '@core/services/notifications.service';
import { LucideAngularModule, Bell } from 'lucide-angular';

@Component({
  selector: 'app-notification-bell',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './notification-bell.component.html',
})
export class NotificationBellComponent implements OnInit {
  readonly svc = inject(NotificationsService);
  readonly bellIcon = Bell;
  readonly open = signal(false);

  /** Which direction the dropdown opens */
  @Input() direction: 'down' | 'up' = 'down';
  /** Which edge of the button the dropdown aligns to */
  @Input() align: 'left' | 'right' = 'left';

  ngOnInit() {
    this.svc.load().subscribe();
  }

  toggle() {
    this.open.update(v => !v);
    if (this.open()) {
      this.svc.load().subscribe();
    }
  }

  markAllRead() {
    this.svc.markAllAsRead().subscribe();
  }

  markRead(id: string) {
    this.svc.markAsRead(id).subscribe();
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('app-notification-bell')) {
      this.open.set(false);
    }
  }
}
