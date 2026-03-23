// store/chat/chat.model.ts

export interface Conversation {
  id: string;
  name: string;
  lastMessage: string;
  time: string;
  unread: number;
  avatar: string;
  online: boolean;
}

export interface ChatMessage {
  id: string;
  conversationId: string;
  /** 'me' for the current user, userId string for others */
  senderId: string;
  text: string;
  timestamp: string;
  read: boolean;
}

export interface ChatStateModel {
  conversations: Conversation[];
  /** Messages indexed by conversationId */
  messages: Record<string, ChatMessage[]>;
  activeConversationId: string | null;
  searchQuery: string;
  loading: boolean;
}
