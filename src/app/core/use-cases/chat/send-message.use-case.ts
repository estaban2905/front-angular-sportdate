/**
 * core/use-cases/chat/send-message.use-case.ts
 *
 * Encapsulates the business rules for sending a chat message:
 *   1. Message must not be empty or whitespace-only.
 *   2. Message text is trimmed before delivery.
 *
 * The ChatState delegates to this use case instead of calling the repository
 * directly, keeping validation logic out of the state and the UI.
 *
 * SRP: validates + delegates. Does not mutate state.
 * DIP: depends on the ChatRepository abstraction, not a concrete implementation.
 */

import { Injectable, inject } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { ChatRepository } from '@core/repositories/abstractions/chat.repository';
import { ChatMessage } from '../../../store/chat/chat.model';

@Injectable({ providedIn: 'root' })
export class SendMessageUseCase {
  private readonly chatRepo = inject(ChatRepository);

  /**
   * Validates and sends a message to the given conversation.
   *
   * @param conversationId - Target conversation.
   * @param text           - Raw text from the input field.
   * @returns Observable<ChatMessage> on success, or an error if validation fails.
   */
  execute(conversationId: number, text: string): Observable<ChatMessage> {
    const trimmed = text.trim();

    if (!trimmed) {
      return throwError(() => new Error('El mensaje no puede estar vacío.'));
    }

    return this.chatRepo.sendMessage(conversationId, trimmed);
  }
}
