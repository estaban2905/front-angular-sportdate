/**
 * pages/ranking/ranking.component.ts
 *
 * Ranking (Leaderboard) page.
 * Tabs: Individual, Equipos, Campeonatos.
 * Filters: General, Running, Fútbol, Padel, Yoga.
 */

import { Component, inject, OnInit, computed, signal } from '@angular/core';
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
  readonly trophyIcon      = Trophy;
  readonly trendingUpIcon  = TrendingUp;
  readonly trendingDownIcon = TrendingDown;
  readonly minusIcon       = Minus;
  readonly usersIcon       = Users;
  readonly awardIcon       = Award;
  readonly shieldIcon      = Shield;

  private readonly store = inject(Store);

  private readonly allLeaderboard = this.store.selectSignal(LeaderboardSelectors.leaderboard);
  private readonly allTeams       = this.store.selectSignal(LeaderboardSelectors.teams);
  readonly championships          = this.store.selectSignal(LeaderboardSelectors.championships);

  // ── Tab / filter state (signals so computed() reacts to changes) ───────────
  readonly tabs    = ['Individual', 'Equipos', 'Campeonatos'];
  readonly filters = ['General', 'Running', 'Fútbol', 'Padel', 'Yoga'];

  readonly activeTab    = signal('Individual');
  readonly activeFilter = signal('General');

  setTab(tab: string): void    { this.activeTab.set(tab); }
  setFilter(f: string): void   { this.activeFilter.set(f); }

  // ── Computed filtered lists ────────────────────────────────────────────────

  readonly leaderboard = computed(() => {
    const entries = this.allLeaderboard();
    const filter  = this.activeFilter();
    if (filter === 'General') return entries;
    return entries.filter(e => e.sport === filter);
  });

  readonly teams = computed(() => {
    const teams  = this.allTeams();
    const filter = this.activeFilter();
    if (filter === 'General') return teams;
    return teams.filter(t => t.sport.includes(filter));
  });

  ngOnInit(): void {
    this.store.dispatch([
      new LeaderboardActions.LoadLeaderboard(),
      new LeaderboardActions.LoadTeams(),
      new LeaderboardActions.LoadChampionships(),
    ]);
  }
}
