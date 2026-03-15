// store/chat/chat.state.ts

import { inject, Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { ChatRepository } from '@core/repositories/abstractions/chat.repository';
import { ChatStateModel, ChatMessage } from './chat.model';
import { CHAT_STATE_DEFAULTS } from './chat.constants';
import { ChatActions } from './chat.actions';

@State<ChatStateModel>({
  name: 'chat',
  defaults: CHAT_STATE_DEFAULTS,
})
@Injectable()
export class ChatState {
  private readonly repo = inject(ChatRepository);

  @Action(ChatActions.LoadConversations)
  loadConversations(ctx: StateContext<ChatStateModel>) {
    ctx.patchState({ loading: true });
    return this.repo.getConversations().pipe(
      tap({
        next: conversations => ctx.patchState({ conversations, loading: false }),
        error: () => ctx.patchState({ loading: false }),
      }),
    );
  }

  @Action(ChatActions.SelectConversation)
  selectConversation(
    ctx: StateContext<ChatStateModel>,
    { id }: ChatActions.SelectConversation,
  ) {
    ctx.patchState({ activeConversationId: id });
    ctx.dispatch(new ChatActions.LoadMessages(id));
    ctx.dispatch(new ChatActions.MarkConversationRead(id));
  }

  @Action(ChatActions.LoadMessages)
  loadMessages(
    ctx: StateContext<ChatStateModel>,
    { conversationId }: ChatActions.LoadMessages,
  ) {
    return this.repo.getMessages(conversationId).pipe(
      tap({
        next: messages => {
          const existing = ctx.getState().messages;
          ctx.patchState({ messages: { ...existing, [conversationId]: messages } });
        },
      }),
    );
  }

  @Action(ChatActions.SendMessage)
  sendMessage(
    ctx: StateContext<ChatStateModel>,
    { conversationId, text }: ChatActions.SendMessage,
  ) {
    return this.repo.sendMessage(conversationId, text).pipe(
      tap({
        next: message => {
          const state = ctx.getState();
          const prev = state.messages[conversationId] ?? [];
          ctx.patchState({
            messages: { ...state.messages, [conversationId]: [...prev, message] },
            conversations: state.conversations.map(c =>
              c.id === conversationId
                ? { ...c, lastMessage: text, time: 'Ahora' }
                : c,
            ),
          });
        },
      }),
    );
  }

  @Action(ChatActions.MarkConversationRead)
  markConversationRead(
    ctx: StateContext<ChatStateModel>,
    { conversationId }: ChatActions.MarkConversationRead,
  ) {
    const conversations = ctx.getState().conversations.map(c =>
      c.id === conversationId ? { ...c, unread: 0 } : c,
    );
    ctx.patchState({ conversations });
  }

  @Action(ChatActions.SetSearchQuery)
  setSearchQuery(
    ctx: StateContext<ChatStateModel>,
    { query }: ChatActions.SetSearchQuery,
  ) {
    ctx.patchState({ searchQuery: query });
  }
}
