/**
 * core/repositories/in-memory/in-memory-chat.repository.ts
 *
 * In-memory implementation of ChatRepository using mock data.
 */

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { ChatRepository } from '../abstractions/chat.repository';
import { Conversation, ChatMessage } from '../../../store/chat/chat.model';

const MOCK_CONVERSATIONS: Conversation[] = [
  { id: 1, name: 'Camila', lastMessage: '¡Nos vemos en el parque a las 10!', time: '10:30 AM', unread: 2, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Camila', online: true },
  { id: 2, name: 'Grupo Running', lastMessage: 'Diego: ¿Quién lleva agua?', time: '9:15 AM', unread: 0, avatar: 'https://api.dicebear.com/7.x/identicon/svg?seed=Running', online: false },
  { id: 3, name: 'Javier', lastMessage: 'Buen partido el de ayer 🤙', time: 'Ayer', unread: 0, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Javier', online: true },
  { id: 4, name: 'Ana P.', lastMessage: '¿Te sumas al padel el jueves?', time: 'Ayer', unread: 0, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ana', online: false },
  { id: 5, name: 'Carlos D.', lastMessage: 'Te envié la solicitud del evento', time: 'Lun', unread: 0, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos', online: false },
];

const MOCK_MESSAGES: Record<number, ChatMessage[]> = {
  1: [
    { id: 'm1', conversationId: 1, senderId: 'me', text: '¡Hola Camila! ¿Vas a ir al evento de running hoy?', timestamp: '10:28 AM', read: true },
    { id: 'm2', conversationId: 1, senderId: 'camila', text: '¡Sii! Justo iba saliendo. ¿Nos juntamos allá?', timestamp: '10:29 AM', read: true },
    { id: 'm3', conversationId: 1, senderId: 'me', text: '¡Dale! Nos vemos en la entrada del parque a las 10.', timestamp: '10:29 AM', read: true },
    { id: 'm4', conversationId: 1, senderId: 'camila', text: '¡Nos vemos en el parque a las 10! 🏃‍♀️', timestamp: '10:30 AM', read: false },
  ],
};

@Injectable()
export class InMemoryChatRepository extends ChatRepository {

  getConversations(): Observable<Conversation[]> {
    return of(MOCK_CONVERSATIONS).pipe(delay(300));
  }

  getMessages(conversationId: number): Observable<ChatMessage[]> {
    return of(MOCK_MESSAGES[conversationId] ?? []).pipe(delay(200));
  }

  sendMessage(conversationId: number, text: string): Observable<ChatMessage> {
    const msg: ChatMessage = {
      id: `m${Date.now()}`,
      conversationId,
      senderId: 'me',
      text,
      timestamp: new Date().toLocaleTimeString('es-CL', { hour: '2-digit', minute: '2-digit' }),
      read: true,
    };
    return of(msg).pipe(delay(150));
  }
}
