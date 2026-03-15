/**
 * pages/ranking/ranking.component.ts
 *
 * Ranking (Leaderboard) page.
 * Shows individual, team, and championship tabs.
 * Uses inject() for all dependencies; reads from LeaderboardStore.
 */

import { Component, inject, OnInit } from '@angular/core';
import { LucideAngularModule, Trophy, TrendingUp, TrendingDown, Minus, Users, Award, Shield } from 'lucide-angular';
import { Store } from '@ngxs/store';
import { LeaderboardSelectors, LeaderboardActions } from '@store/leaderboard';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrl: './ranking.component.scss',
  imports: [LucideAngularModule],
})
export class RankingComponent implements OnInit {
  // ---------------------------------------------------------------------------
  // Icon references
  // ---------------------------------------------------------------------------
  readonly trophyIcon = Trophy;
  readonly trendingUpIcon = TrendingUp;
  readonly trendingDownIcon = TrendingDown;
  readonly minusIcon = Minus;
  readonly usersIcon = Users;
  readonly awardIcon = Award;
  readonly shieldIcon = Shield;

  // ---------------------------------------------------------------------------
  // Store
  // ---------------------------------------------------------------------------
  private readonly store = inject(Store);

  readonly leaderboard   = this.store.selectSignal(LeaderboardSelectors.leaderboard);
  readonly teams         = this.store.selectSignal(LeaderboardSelectors.teams);
  readonly championships = this.store.selectSignal(LeaderboardSelectors.championships);

  // ---------------------------------------------------------------------------
  // Tab / filter state
  // ---------------------------------------------------------------------------
  readonly tabs = ['Individual', 'Equipos', 'Campeonatos'];
  readonly filters = ['General', 'Running', 'Fútbol', 'Padel', 'Yoga'];

  activeTab = 'Individual';
  activeFilter = 'General';

  ngOnInit(): void {
    this.store.dispatch([
      new LeaderboardActions.LoadLeaderboard(),
      new LeaderboardActions.LoadTeams(),
      new LeaderboardActions.LoadChampionships(),
    ]);
  }
}
