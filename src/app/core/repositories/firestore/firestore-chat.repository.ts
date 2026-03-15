/**
 * core/repositories/firestore/firestore-chat.repository.ts
 *
 * Firestore implementation of ChatRepository.
 *
 * Path: SPORTDATE/main/
 *   - conversations/{id}  → Conversation documents
 *   - messages/{id}       → ChatMessage documents (field: conversationId)
 */

import { Injectable, inject } from '@angular/core';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  collection,
  onSnapshot,
  query,
  where,
  orderBy,
  addDoc,
  serverTimestamp,
} from 'firebase/firestore';
import { FIRESTORE, DB_ROOT } from '../../firebase/firebase.provider';
import { ChatRepository } from '../abstractions/chat.repository';
import { Conversation, ChatMessage } from '../../../store/chat/chat.model';

@Injectable()
export class FirestoreChatRepository extends ChatRepository {
  private readonly db = inject(FIRESTORE);

  getConversations(): Observable<Conversation[]> {
    return new Observable<Conversation[]>(observer => {
      const ref = collection(this.db, `${DB_ROOT}/conversations`);
      const unsubscribe = onSnapshot(
        ref,
        snapshot => {
          const conversations = snapshot.docs.map(d => ({ ...d.data() } as Conversation));
          observer.next(conversations);
        },
        error => observer.error(error),
      );
      return () => unsubscribe();
    });
  }

  getMessages(conversationId: number): Observable<ChatMessage[]> {
    return new Observable<ChatMessage[]>(observer => {
      const ref = query(
        collection(this.db, `${DB_ROOT}/messages`),
        where('conversationId', '==', conversationId),
        orderBy('_order', 'asc'),
      );
      const unsubscribe = onSnapshot(
        ref,
        snapshot => {
          const messages = snapshot.docs.map(d => {
            const data = d.data();
            const { _order, _createdAt, ...msg } = data;
            return msg as ChatMessage;
          });
          observer.next(messages);
        },
        error => observer.error(error),
      );
      return () => unsubscribe();
    });
  }

  sendMessage(conversationId: number, text: string): Observable<ChatMessage> {
    const timestamp = new Date().toLocaleTimeString('es-CL', {
      hour: '2-digit',
      minute: '2-digit',
    });

    const message: Omit<ChatMessage, 'id'> & { _createdAt: unknown; _order: number } = {
      conversationId,
      senderId: 'me',
      text,
      timestamp,
      read: true,
      _createdAt: serverTimestamp(),
      _order: Date.now(),
    };

    return from(addDoc(collection(this.db, `${DB_ROOT}/messages`), message)).pipe(
      map(docRef => ({
        id: docRef.id,
        conversationId,
        senderId: 'me',
        text,
        timestamp,
        read: true,
      } as ChatMessage)),
    );
  }
}
