/**
 * pages/grupos/grupos.component.ts
 *
 * Grupos / Comunidades page.
 * Shows a featured banner, tab navigation, community grid, and widgets
 * (top communities, upcoming community events).
 *
 * Uses inject() for all dependencies; reads from CommunityStore.
 */

import { Component, inject, OnInit } from '@angular/core';
import { LucideAngularModule, Users, MessageCircle, Calendar, Plus, Trophy, Flame, Search, ArrowRight } from 'lucide-angular';
import { Store } from '@ngxs/store';
import { CommunitiesSelectors, CommunitiesActions } from '@store/communities';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrl: './grupos.component.scss',
  imports: [LucideAngularModule],
})
export class GruposComponent implements OnInit {
  // ---------------------------------------------------------------------------
  // Icon references
  // ---------------------------------------------------------------------------
  readonly usersIcon = Users;
  readonly messageCircleIcon = MessageCircle;
  readonly calendarIcon = Calendar;
  readonly plusIcon = Plus;
  readonly trophyIcon = Trophy;
  readonly flameIcon = Flame;
  readonly searchIcon = Search;
  readonly arrowRightIcon = ArrowRight;

  // ---------------------------------------------------------------------------
  // Store
  // ---------------------------------------------------------------------------
  private readonly store = inject(Store);

  readonly communities = this.store.selectSignal(CommunitiesSelectors.communities);

  // ---------------------------------------------------------------------------
  // Tab state
  // ---------------------------------------------------------------------------
  activeTab = 'explorar';
  readonly navTabs = ['Explorar', 'Mis Comunidades', 'Populares'];

  ngOnInit(): void {
    this.store.dispatch(new CommunitiesActions.LoadCommunities());
  }
}
