/**
 * pages/chat/chat.component.ts
 *
 * Chat / Mensajes page.
 * Shows a chat list sidebar and a sample conversation (desktop).
 * No store dependency — chat data is static mock for now.
 *
 * Uses inject() pattern (no constructor injection).
 */

import { Component } from '@angular/core';
import { LucideAngularModule, Search, MoreVertical, Phone, Video } from 'lucide-angular';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
  imports: [LucideAngularModule],
})
export class ChatComponent {
  // ---------------------------------------------------------------------------
  // Icon references
  // ---------------------------------------------------------------------------
  readonly searchIcon = Search;
  readonly moreVerticalIcon = MoreVertical;
  readonly phoneIcon = Phone;
  readonly videoIcon = Video;

  // ---------------------------------------------------------------------------
  // Mock chat data
  // ---------------------------------------------------------------------------
  chats = [
    { id: 1, name: 'Camila', message: '¡Nos vemos en el parque a las 10!', time: '10:30 AM', unread: 2, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Camila', online: true },
    { id: 2, name: 'Grupo Running', message: 'Diego: ¿Quién lleva agua?', time: '9:15 AM', unread: 0, avatar: 'https://api.dicebear.com/7.x/identicon/svg?seed=Running', online: false },
    { id: 3, name: 'Javier', message: 'Buen partido el de ayer 🤙', time: 'Ayer', unread: 0, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Javier', online: true },
    { id: 4, name: 'Ana P.', message: '¿Te sumas al padel el jueves?', time: 'Ayer', unread: 0, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ana', online: false },
    { id: 5, name: 'Carlos D.', message: 'Te envié la solicitud del evento', time: 'Lun', unread: 0, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos', online: false },
  ];
}
