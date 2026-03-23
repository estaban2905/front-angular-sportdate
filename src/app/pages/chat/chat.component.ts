/**
 * pages/chat/chat.component.ts
 *
 * Chat / Mensajes page.
 * Shows a conversation list sidebar and an active conversation window (desktop).
 *
 * Reads data from ChatState via NGXS signals.
 * Dispatches ChatActions for all user interactions.
 */

import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule, Search, MoreVertical, Phone, Video, Send } from 'lucide-angular';
import { Store } from '@ngxs/store';
import { ChatSelectors } from '@store/chat/chat.selectors';
import { ChatActions } from '@store/chat/chat.actions';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
  imports: [LucideAngularModule, FormsModule],
})
export class ChatComponent implements OnInit {
  // ---------------------------------------------------------------------------
  // Icon references
  // ---------------------------------------------------------------------------
  readonly searchIcon = Search;
  readonly moreVerticalIcon = MoreVertical;
  readonly phoneIcon = Phone;
  readonly videoIcon = Video;
  readonly sendIcon = Send;

  // ---------------------------------------------------------------------------
  // Store
  // ---------------------------------------------------------------------------
  private readonly store = inject(Store);

  readonly conversations     = this.store.selectSignal(ChatSelectors.filteredConversations);
  readonly activeConversation = this.store.selectSignal(ChatSelectors.activeConversation);
  readonly activeMessages    = this.store.selectSignal(ChatSelectors.activeMessages);
  readonly loading           = this.store.selectSignal(ChatSelectors.loading);

  // ---------------------------------------------------------------------------
  // Local UI state
  // ---------------------------------------------------------------------------
  messageText = '';
  searchQuery = '';

  ngOnInit(): void {
    this.store.dispatch(new ChatActions.LoadConversations());
  }

  selectConversation(id: string): void {
    this.store.dispatch(new ChatActions.SelectConversation(id));
  }

  onSearch(query: string): void {
    this.searchQuery = query;
    this.store.dispatch(new ChatActions.SetSearchQuery(query));
  }

  sendMessage(): void {
    const conversation = this.activeConversation();
    if (!conversation || !this.messageText.trim()) return;

    this.store.dispatch(new ChatActions.SendMessage(conversation.id, this.messageText));
    this.messageText = '';
  }

  onEnter(event: Event): void {
    event.preventDefault();
    this.sendMessage();
  }
}
