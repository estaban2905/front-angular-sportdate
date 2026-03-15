// store/chat/chat.constants.ts

import { ChatStateModel } from './chat.model';

export const CHAT_STATE_DEFAULTS: ChatStateModel = {
  conversations: [],
  messages: {},
  activeConversationId: null,
  searchQuery: '',
  loading: false,
};
