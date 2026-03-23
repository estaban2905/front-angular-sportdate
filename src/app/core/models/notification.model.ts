export interface AppNotification {
  id: string;
  userId: string;
  type: 'event_join' | 'event_leave' | string;
  title: string;
  message: string;
  data?: Record<string, unknown>;
  read: boolean;
  createdAt: string;
}
