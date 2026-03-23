// store/chat/chat.actions.ts

import { Conversation, ChatMessage } from './chat.model';

export namespace ChatActions {
  export class LoadConversations {
    static readonly type = '[Chat] Load Conversations';
  }

  export class LoadConversationsSuccess {
    static readonly type = '[Chat] Load Conversations Success';
    constructor(public conversations: Conversation[]) {}
  }

  export class SelectConversation {
    static readonly type = '[Chat] Select Conversation';
    constructor(public id: string) {}
  }

  export class LoadMessages {
    static readonly type = '[Chat] Load Messages';
    constructor(public conversationId: string) {}
  }

  export class LoadMessagesSuccess {
    static readonly type = '[Chat] Load Messages Success';
    constructor(public conversationId: string, public messages: ChatMessage[]) {}
  }

  export class SendMessage {
    static readonly type = '[Chat] Send Message';
    constructor(public conversationId: string, public text: string) {}
  }

  export class SendMessageSuccess {
    static readonly type = '[Chat] Send Message Success';
    constructor(public message: ChatMessage) {}
  }

  export class MarkConversationRead {
    static readonly type = '[Chat] Mark Conversation Read';
    constructor(public conversationId: string) {}
  }

  export class SetSearchQuery {
    static readonly type = '[Chat] Set Search Query';
    constructor(public query: string) {}
  }
}
