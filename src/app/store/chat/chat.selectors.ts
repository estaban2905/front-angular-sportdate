// store/chat/chat.selectors.ts

import { Selector } from '@ngxs/store';
import { ChatState } from './chat.state';
import { ChatMessage, ChatStateModel, Conversation } from './chat.model';

export class ChatSelectors {
  @Selector([ChatState])
  static conversations(state: ChatStateModel): Conversation[] {
    return state.conversations;
  }

  @Selector([ChatState])
  static filteredConversations(state: ChatStateModel): Conversation[] {
    const q = state.searchQuery.toLowerCase().trim();
    if (!q) return state.conversations;
    return state.conversations.filter(c =>
      c.name.toLowerCase().includes(q) || c.lastMessage.toLowerCase().includes(q),
    );
  }

  @Selector([ChatState])
  static activeConversationId(state: ChatStateModel): number | null {
    return state.activeConversationId;
  }

  @Selector([ChatState])
  static activeConversation(state: ChatStateModel): Conversation | null {
    if (state.activeConversationId === null) return null;
    return state.conversations.find(c => c.id === state.activeConversationId) ?? null;
  }

  @Selector([ChatState])
  static activeMessages(state: ChatStateModel): ChatMessage[] {
    if (state.activeConversationId === null) return [];
    return state.messages[state.activeConversationId] ?? [];
  }

  @Selector([ChatState])
  static totalUnread(state: ChatStateModel): number {
    return state.conversations.reduce((acc, c) => acc + c.unread, 0);
  }

  @Selector([ChatState])
  static searchQuery(state: ChatStateModel): string {
    return state.searchQuery;
  }

  @Selector([ChatState])
  static loading(state: ChatStateModel): boolean {
    return state.loading;
  }
}
