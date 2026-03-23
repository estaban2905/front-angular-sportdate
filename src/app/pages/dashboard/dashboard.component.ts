/**
 * pages/dashboard/dashboard.component.ts
 *
 * Dashboard page component — the app's home screen.
 * All data comes from the store; no values are hardcoded.
 */

import { Component, inject, computed, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  LucideAngularModule,
  Flame, Trophy, Calendar, MapPin, Target, Activity, Heart,
  ChevronRight, Search, Plus, TrendingUp,
} from 'lucide-angular';
import { Store } from '@ngxs/store';
import { UserSelectors, UserActions } from '@store/user';
import { EventsSelectors, EventsActions } from '@store/events';
import { LeaderboardSelectors, LeaderboardActions } from '@store/leaderboard';
import { AuthSelectors } from '@store/auth';
import { APP_ROUTES } from '@app/constants/app-routing.constants';

/** Background color class per activity type for the feed icons. */
const ACTIVITY_BG: Record<string, string> = {
  event_join:  'bg-blue-100 dark:bg-blue-900/20',
  match:       'bg-rose-100 dark:bg-rose-900/20',
  achievement: 'bg-yellow-100 dark:bg-yellow-900/20',
  level_up:    'bg-yellow-100 dark:bg-yellow-900/20',
  reto_win:    'bg-green-100 dark:bg-green-900/20',
};

const DEFAULT_BG = 'bg-gray-100 dark:bg-[#2D2D4A]';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  imports: [LucideAngularModule, RouterLink],
})
export class DashboardComponent implements OnInit {
  // ── Lucide icons ──────────────────────────────────────────────────────────
  readonly FlameIcon      = Flame;
  readonly TrophyIcon     = Trophy;
  readonly CalendarIcon   = Calendar;
  readonly MapPinIcon     = MapPin;
  readonly TrendingUpIcon = TrendingUp;
  readonly TargetIcon     = Target;
  readonly ActivityIcon   = Activity;
  readonly HeartIcon      = Heart;
  readonly SearchIcon     = Search;
  readonly PlusIcon       = Plus;
  readonly ChevronRightIcon = ChevronRight;

  // ── Routes ────────────────────────────────────────────────────────────────
  readonly ROUTES = APP_ROUTES;

  // ── Store ─────────────────────────────────────────────────────────────────
  private readonly store = inject(Store);

  readonly currentUser    = this.store.selectSignal(AuthSelectors.user);
  readonly displayName    = this.store.selectSignal(AuthSelectors.displayName);
  readonly userStats      = this.store.selectSignal(UserSelectors.userStats);
  readonly challenges     = this.store.selectSignal(EventsSelectors.challenges);
  readonly profiles       = this.store.selectSignal(UserSelectors.profiles);
  readonly leaderboard    = this.store.selectSignal(LeaderboardSelectors.leaderboard);
  readonly events         = this.store.selectSignal(EventsSelectors.events);
  readonly weeklyActivity = this.store.selectSignal(UserSelectors.weeklyActivity);
  readonly recentActivity = this.store.selectSignal(UserSelectors.recentActivity);
  readonly userRank       = this.store.selectSignal(LeaderboardSelectors.userRank);

  // ── Derived ───────────────────────────────────────────────────────────────
  readonly eventsSlice      = computed(() => this.events().slice(0, 3));
  readonly leaderboardSlice = computed(() => this.leaderboard().slice(0, 3));

  readonly circleC = 2 * Math.PI * 33;
  /** XP needed to level up: every 500 XP is one level. */
  private readonly XP_PER_LEVEL = 500;

  get xpPct(): number {
    const xp = this.userStats()?.xp ?? 0;
    return Math.round((xp % this.XP_PER_LEVEL) / this.XP_PER_LEVEL * 100);
  }

  get xpToNextLevel(): number {
    const xp = this.userStats()?.xp ?? 0;
    return this.XP_PER_LEVEL - (xp % this.XP_PER_LEVEL);
  }

  get weeklyTotal(): number {
    return this.weeklyActivity().reduce((s, d) => s + d.count, 0);
  }

  get maxActivity(): number {
    const counts = this.weeklyActivity().map(d => d.count);
    return counts.length ? Math.max(...counts) : 1;
  }

  /** Index (0-based) in weeklyActivity array that corresponds to today. */
  get todayIndex(): number {
    return this.weeklyActivity().length - 1;
  }

  readonly stats = computed(() => {
    const s = this.userStats();
    if (!s) return [];
    const matches = (s as any).winCount + (s as any).lossCount + (s as any).drawCount;
    return [
      { label: 'Partidos', value: matches || s.matchesPlayed || 0, emoji: '⚽' },
      { label: 'Eventos',  value: s.eventsAttended,                emoji: '📅' },
      { label: 'Rating',   value: s.rating.toFixed(1),             emoji: '⭐' },
      { label: 'Racha',    value: `${s.streak}d`,                  emoji: '🔥' },
    ];
  });

  activityBg(type: string): string {
    return ACTIVITY_BG[type] ?? DEFAULT_BG;
  }

  /** Formats a createdAt ISO string as a relative time label in Spanish. */
  relativeTime(isoDate: string): string {
    const diffMs  = Date.now() - new Date(isoDate).getTime();
    const diffMin = Math.floor(diffMs / 60_000);
    if (diffMin < 60)   return `Hace ${diffMin}m`;
    const diffH = Math.floor(diffMin / 60);
    if (diffH < 24)     return `Hace ${diffH}h`;
    const diffD = Math.floor(diffH / 24);
    if (diffD === 1)    return 'Ayer';
    return `Hace ${diffD} días`;
  }

  ngOnInit(): void {
    this.store.dispatch([
      new UserActions.LoadUserStats(),
      new UserActions.LoadProfiles(),
      new UserActions.LoadWeeklyActivity(),
      new UserActions.LoadRecentActivity(),
      new EventsActions.LoadEvents(),
      new EventsActions.LoadChallenges(),
      new LeaderboardActions.LoadLeaderboard(),
      new LeaderboardActions.LoadUserRank(),
    ]);
  }
}
