/**
 * core/repositories/abstractions/chat.repository.ts
 *
 * Abstract base class for the Chat repository.
 */

import { Observable } from 'rxjs';
import { Conversation, ChatMessage } from '../../../store/chat/chat.model';

export abstract class ChatRepository {
  abstract getConversations(): Observable<Conversation[]>;
  abstract getMessages(conversationId: string): Observable<ChatMessage[]>;
  abstract sendMessage(conversationId: string, text: string): Observable<ChatMessage>;
}
