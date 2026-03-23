/**
 * pages/perfil/perfil.component.ts
 *
 * Perfil (User Profile) page.
 * Shows the current user's real data (displayName, photoURL from Firebase Auth),
 * stats, achievement badges, and recent activity timeline.
 * Allows editing displayName via a modal.
 */

import { Component, inject, computed, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule, MapPin, Settings, Edit2, Share2, Award, X } from 'lucide-angular';
import { Store } from '@ngxs/store';
import { UserSelectors, UserActions } from '@store/user';
import { AuthSelectors, AuthActions } from '@store/auth';
import { ToastService } from '@core/services/toast.service';
import { AchievementBadgeComponent } from '../../shared/ui/achievement-badge/achievement-badge.component';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.scss',
  imports: [LucideAngularModule, FormsModule, AchievementBadgeComponent],
})
export class PerfilComponent implements OnInit {
  readonly mapPinIcon    = MapPin;
  readonly settingsIcon  = Settings;
  readonly edit2Icon     = Edit2;
  readonly share2Icon    = Share2;
  readonly awardIcon     = Award;
  readonly xIcon         = X;

  private readonly store        = inject(Store);
  private readonly toastService = inject(ToastService);

  readonly userStats     = this.store.selectSignal(UserSelectors.userStats);
  readonly achievements  = this.store.selectSignal(UserSelectors.achievements);
  readonly unlockedCount = this.store.selectSignal(UserSelectors.unlockedCount);
  readonly currentUser   = this.store.selectSignal(AuthSelectors.user);

  /** Display name: from Firebase Auth user. */
  readonly displayName = computed(() => this.currentUser()?.displayName ?? 'Atleta');

  /** Avatar URL: from Firebase Auth photoURL, or DiceBear fallback. */
  readonly avatarUrl = computed(() => {
    const photo = this.currentUser()?.photoURL;
    const name  = this.currentUser()?.displayName ?? 'Atleta';
    return photo ?? `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(name)}`;
  });

  readonly stats = [
    { label: 'Partidos', emoji: '⚽', getValue: () => this.userStats()?.matchesPlayed },
    { label: 'Eventos',  emoji: '📅', getValue: () => this.userStats()?.eventsAttended },
    { label: 'Rating',   emoji: '⭐', getValue: () => this.userStats()?.rating },
    { label: 'Racha',    emoji: '🔥', getValue: () => this.userStats() ? `${this.userStats()!.streak} días` : '' },
  ];

  readonly sports = [
    { name: 'Fútbol',   level: 'Avanzado',     color: 'bg-teal-100 text-teal-700' },
    { name: 'Running',  level: 'Intermedio',   color: 'bg-orange-100 text-orange-700' },
    { name: 'Padel',    level: 'Principiante', color: 'bg-blue-100 text-blue-700' },
    { name: 'Trekking', level: 'Amateur',      color: 'bg-green-100 text-green-700' },
  ];

  // ── Edit modal ─────────────────────────────────────────────────────────────
  isEditModalOpen = false;
  isSavingProfile = false;
  editDisplayName = '';

  openEditModal(): void {
    this.editDisplayName = this.displayName();
    this.isEditModalOpen = true;
  }

  closeEditModal(): void {
    this.isEditModalOpen = false;
    this.editDisplayName = '';
  }

  saveProfile(): void {
    const name = this.editDisplayName.trim();
    if (!name || name.length < 2 || name.length > 30) {
      this.toastService.warning('El nombre debe tener entre 2 y 30 caracteres.');
      return;
    }
    this.isSavingProfile = true;
    this.store.dispatch(new AuthActions.UpdateDisplayName(name)).subscribe({
      complete: () => {
        this.isSavingProfile = false;
        this.closeEditModal();
        this.toastService.success('Perfil actualizado ✅');
      },
      error: () => {
        this.isSavingProfile = false;
        this.toastService.error('Error al actualizar el perfil.');
      },
    });
  }

  shareProfile(): void {
    const name = this.displayName();
    if (navigator.share) {
      navigator.share({ title: `Perfil de ${name} en SportDate`, url: window.location.href });
    } else {
      navigator.clipboard.writeText(window.location.href).then(() => {
        this.toastService.info('Enlace copiado al portapapeles 📋');
      });
    }
  }

  ngOnInit(): void {
    this.store.dispatch([
      new UserActions.LoadUserStats(),
      new UserActions.LoadAchievements(),
    ]);
  }
}
