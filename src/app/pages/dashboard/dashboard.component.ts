/**
 * pages/dashboard/dashboard.component.ts
 *
 * Dashboard page component — the app's home screen.
 * Displays the user hero card, XP ring, quick-action buttons, challenge progress,
 * weekly activity chart, recent matches, upcoming events, leaderboard preview,
 * and an activity feed.
 *
 * Reads data exclusively from UserStore, EventsStore, and LeaderboardStore.
 * Uses inject() for all dependencies (no constructor injection).
 */

import { Component, inject, computed, OnInit } from '@angular/core';
import {
  LucideAngularModule,
  Flame, Trophy, Calendar, MapPin, Target, Activity, Heart,
  ChevronRight, Search, Plus, TrendingUp,
} from 'lucide-angular';
import { Store } from '@ngxs/store';
import { UserSelectors, UserActions } from '@store/user';
import { EventsSelectors, EventsActions } from '@store/events';
import { LeaderboardSelectors, LeaderboardActions } from '@store/leaderboard';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  imports: [LucideAngularModule],
})
export class DashboardComponent implements OnInit {
  // ---------------------------------------------------------------------------
  // Lucide icon references
  // ---------------------------------------------------------------------------
  readonly FlameIcon = Flame;
  readonly TrophyIcon = Trophy;
  readonly CalendarIcon = Calendar;
  readonly MapPinIcon = MapPin;
  readonly TrendingUpIcon = TrendingUp;
  readonly TargetIcon = Target;
  readonly ActivityIcon = Activity;
  readonly HeartIcon = Heart;
  readonly SearchIcon = Search;
  readonly PlusIcon = Plus;
  readonly ChevronRightIcon = ChevronRight;

  // ---------------------------------------------------------------------------
  // Store
  // ---------------------------------------------------------------------------
  private readonly store = inject(Store);

  readonly userStats = this.store.selectSignal(UserSelectors.userStats);
  readonly challenges = this.store.selectSignal(EventsSelectors.challenges);
  readonly profiles = this.store.selectSignal(UserSelectors.profiles);
  readonly leaderboard = this.store.selectSignal(LeaderboardSelectors.leaderboard);
  readonly events = this.store.selectSignal(EventsSelectors.events);

  readonly eventsSlice = computed(() => this.events().slice(0, 3));
  readonly leaderboardSlice = computed(() => this.leaderboard().slice(0, 3));

  // ---------------------------------------------------------------------------
  // Static/derived display data
  // ---------------------------------------------------------------------------
  readonly weeklyActivity = [3, 5, 2, 7, 4, 8, 1];
  readonly days = ['L', 'M', 'X', 'J', 'V', 'S', 'D'];
  readonly todayIndex = 5;
  readonly circleC = 2 * Math.PI * 33;

  get weeklyTotal() { return this.weeklyActivity.reduce((a, b) => a + b, 0); }
  get maxActivity() { return Math.max(...this.weeklyActivity); }
  get xpPct() {
    const stats = this.userStats();
    return stats ? Math.round((stats.xp / 3000) * 100) : 0;
  }

  /** Quick-stat cards derived from the store signal. */
  readonly stats = computed(() => {
    const s = this.userStats();
    if (!s) return [];
    return [
      { label: 'Partidos', value: s.matchesPlayed, emoji: '⚽' },
      { label: 'Eventos', value: s.eventsAttended, emoji: '📅' },
      { label: 'Rating', value: s.rating, emoji: '⭐' },
      { label: 'Racha', value: `${s.streak}d`, emoji: '🔥' },
    ];
  });

  readonly recentActivity = [
    { id: 1, title: 'Completaste Running 5k', time: 'Hace 2h', icon: '🏃', bg: 'bg-green-100 dark:bg-green-900/20' },
    { id: 2, title: 'Nuevo match con Camila', time: 'Hace 5h', icon: '❤️', bg: 'bg-rose-100 dark:bg-rose-900/20' },
    { id: 3, title: 'Yoga al Atardecer', time: 'Ayer', icon: '🧘', bg: 'bg-purple-100 dark:bg-purple-900/20' },
    { id: 4, title: 'Subiste al Nivel 12', time: 'Hace 2 días', icon: '🏆', bg: 'bg-yellow-100 dark:bg-yellow-900/20' },
  ];

  ngOnInit(): void {
    this.store.dispatch([
      new UserActions.LoadUserStats(),
      new UserActions.LoadProfiles(),
      new EventsActions.LoadEvents(),
      new EventsActions.LoadChallenges(),
      new LeaderboardActions.LoadLeaderboard(),
    ]);
  }
}
