// store/chat/chat.model.ts

export interface Conversation {
  id: number;
  name: string;
  lastMessage: string;
  time: string;
  unread: number;
  avatar: string;
  online: boolean;
}

export interface ChatMessage {
  id: string;
  conversationId: number;
  /** 'me' for the current user, userId string for others */
  senderId: string;
  text: string;
  timestamp: string;
  read: boolean;
}

export interface ChatStateModel {
  conversations: Conversation[];
  /** Messages indexed by conversationId */
  messages: Record<number, ChatMessage[]>;
  activeConversationId: number | null;
  searchQuery: string;
  loading: boolean;
}
