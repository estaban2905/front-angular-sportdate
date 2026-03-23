/**
 * core/repositories/http/http-chat.repository.ts
 *
 * HTTP implementation of ChatRepository.
 * Replaces Firestore implementation.
 */

import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '@environments/environment';
import { ChatRepository } from '../abstractions/chat.repository';
import { Conversation, ChatMessage } from '../../../store/chat/chat.model';

function formatTime(iso: string | null | undefined): string {
  if (!iso) return '';
  const d = new Date(iso);
  const now = new Date();
  const diffMs = now.getTime() - d.getTime();
  const diffMin = Math.floor(diffMs / 60000);
  if (diffMin < 1) return 'Ahora';
  if (diffMin < 60) return `${diffMin}m`;
  const diffH = Math.floor(diffMin / 60);
  if (diffH < 24) return `${diffH}h`;
  return d.toLocaleDateString('es', { day: 'numeric', month: 'short' });
}

function mapConversation(raw: any): Conversation {
  return {
    id:          raw.id ?? '',
    name:        raw.name ?? 'Conversación',
    lastMessage: raw.lastMessage ?? '',
    time:        formatTime(raw.lastMessageTime ?? raw.updatedAt),
    unread:      raw.unread ?? 0,
    avatar:      raw.avatar ?? '',
    online:      raw.online ?? false,
  };
}

function mapMessage(raw: any): ChatMessage {
  return {
    id:             raw.id ?? '',
    conversationId: raw.conversationId ?? '',
    senderId:       raw.senderId ?? '',
    text:           raw.text ?? '',
    timestamp:      raw.timestamp ?? raw.createdAt ?? '',
    read:           raw.read ?? false,
  };
}

@Injectable()
export class HttpChatRepository extends ChatRepository {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = `${environment.apiUrl}/chat`;

  getConversations(): Observable<Conversation[]> {
    return this.http.get<any[]>(`${this.apiUrl}/conversations`).pipe(
      map(list => list.map(mapConversation)),
    );
  }

  getMessages(conversationId: string): Observable<ChatMessage[]> {
    return this.http.get<any[]>(`${this.apiUrl}/conversations/${conversationId}/messages`).pipe(
      map(list => list.map(mapMessage)),
    );
  }

  sendMessage(conversationId: string, text: string): Observable<ChatMessage> {
    return this.http.post<any>(
      `${this.apiUrl}/conversations/${conversationId}/messages`,
      { text },
    ).pipe(map(mapMessage));
  }
}
