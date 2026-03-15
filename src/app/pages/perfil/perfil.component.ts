/**
 * pages/perfil/perfil.component.ts
 *
 * Perfil (User Profile) page.
 * Shows the current user's cover photo, avatar, stats, sport tags,
 * achievement badges, and recent activity timeline.
 *
 * Uses inject() for all dependencies; reads from UserStore.
 */

import { Component, inject, computed, OnInit } from '@angular/core';
import { LucideAngularModule, MapPin, Settings, Edit2, Share2, Award } from 'lucide-angular';
import { Store } from '@ngxs/store';
import { UserSelectors, UserActions } from '@store/user';
import { AchievementBadgeComponent } from '../../shared/ui/achievement-badge/achievement-badge.component';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.scss',
  imports: [LucideAngularModule, AchievementBadgeComponent],
})
export class PerfilComponent implements OnInit {
  // ---------------------------------------------------------------------------
  // Icon references
  // ---------------------------------------------------------------------------
  readonly mapPinIcon = MapPin;
  readonly settingsIcon = Settings;
  readonly edit2Icon = Edit2;
  readonly share2Icon = Share2;
  readonly awardIcon = Award;

  // ---------------------------------------------------------------------------
  // Store
  // ---------------------------------------------------------------------------
  private readonly store = inject(Store);

  readonly userStats     = this.store.selectSignal(UserSelectors.userStats);
  readonly achievements  = this.store.selectSignal(UserSelectors.achievements);
  readonly unlockedCount = this.store.selectSignal(UserSelectors.unlockedCount);

  // ---------------------------------------------------------------------------
  // Static display data
  // ---------------------------------------------------------------------------
  readonly stats = [
    { label: 'Partidos', emoji: '⚽', getValue: () => this.userStats()?.matchesPlayed },
    { label: 'Eventos',  emoji: '📅', getValue: () => this.userStats()?.eventsAttended },
    { label: 'Rating',   emoji: '⭐', getValue: () => this.userStats()?.rating },
    { label: 'Racha',    emoji: '🔥', getValue: () => this.userStats() ? `${this.userStats()!.streak} días` : '' },
  ];

  readonly sports = [
    { name: 'Fútbol',   level: 'Avanzado',    color: 'bg-teal-100 text-teal-700' },
    { name: 'Running',  level: 'Intermedio',  color: 'bg-orange-100 text-orange-700' },
    { name: 'Padel',    level: 'Principiante', color: 'bg-blue-100 text-blue-700' },
    { name: 'Trekking', level: 'Amateur',      color: 'bg-green-100 text-green-700' },
  ];

  readonly recentActivity = [
    { title: 'Partido de Fútbol', date: 'Ayer' },
    { title: 'Running 5k', date: 'Hace 3 días' },
    { title: 'Nuevo Nivel 12', date: 'Hace 5 días' },
    { title: 'Clase de Yoga', date: 'Hace 1 semana' },
  ];

  ngOnInit(): void {
    this.store.dispatch([
      new UserActions.LoadUserStats(),
      new UserActions.LoadAchievements(),
    ]);
  }
}
