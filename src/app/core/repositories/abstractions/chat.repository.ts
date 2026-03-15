/**
 * core/repositories/abstractions/chat.repository.ts
 *
 * Abstract base class for the Chat repository.
 */

import { Observable } from 'rxjs';
import { Conversation, ChatMessage } from '../../../store/chat/chat.model';

export abstract class ChatRepository {
  abstract getConversations(): Observable<Conversation[]>;
  abstract getMessages(conversationId: number): Observable<ChatMessage[]>;
  abstract sendMessage(conversationId: number, text: string): Observable<ChatMessage>;
}
