/**
 * pages/match/match.component.ts
 *
 * Match / Discover page.
 * Lets the user swipe through athlete profiles, apply sport filters,
 * trigger confetti on a match, and see nearby athletes and featured profiles.
 *
 * Uses inject() for all dependencies; reads profiles from UserStore
 * and groups from CommunityStore.
 */

import { Component, inject, OnInit } from '@angular/core';
import { LucideAngularModule, Info, Shield, MapPin, Clock, Activity, Star, Search } from 'lucide-angular';
import { Store } from '@ngxs/store';
import { UserSelectors, UserActions } from '@store/user';
import { CommunitiesSelectors, CommunitiesActions } from '@store/communities';
import { ProfileCardComponent } from '../../shared/ui/profile-card/profile-card.component';
import { GruposScrollComponent } from '../../shared/ui/grupos-scroll/grupos-scroll.component';
import { ConfettiEffectComponent } from '../../shared/ui/confetti-effect/confetti-effect.component';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrl: './match.component.scss',
  imports: [ProfileCardComponent, GruposScrollComponent, ConfettiEffectComponent, LucideAngularModule],
})
export class MatchComponent implements OnInit {
  // ---------------------------------------------------------------------------
  // Icon references
  // ---------------------------------------------------------------------------
  readonly infoIcon = Info;
  readonly shieldIcon = Shield;
  readonly mapPinIcon = MapPin;
  readonly clockIcon = Clock;
  readonly activityIcon = Activity;
  readonly starIcon = Star;
  readonly searchIcon = Search;

  // ---------------------------------------------------------------------------
  // Store
  // ---------------------------------------------------------------------------
  private readonly store = inject(Store);

  readonly profiles = this.store.selectSignal(UserSelectors.profiles);
  readonly groups   = this.store.selectSignal(CommunitiesSelectors.groups);

  // ---------------------------------------------------------------------------
  // Local UI state
  // ---------------------------------------------------------------------------
  readonly filters = ['Todos', '⚽ Fútbol', '🏃 Running', '🎾 Padel', '🧘 Yoga', '🏔️ Trekking'];
  currentIndex = 0;
  showConfetti = false;
  showMatchOverlay = false;
  activeFilter = 'Todos';

  /** The profile card currently on top of the stack. */
  get currentProfile() {
    const all = this.profiles();
    return all[this.currentIndex % (all.length || 1)];
  }

  handleNext(): void {
    this.currentIndex++;
  }

  handleAccept(): void {
    this.showConfetti = true;
    this.showMatchOverlay = true;
    setTimeout(() => {
      this.showMatchOverlay = false;
      this.handleNext();
      setTimeout(() => (this.showConfetti = false), 500);
    }, 1500);
  }

  ngOnInit(): void {
    this.store.dispatch([
      new UserActions.LoadProfiles(),
      new CommunitiesActions.LoadGroups(),
    ]);
  }
}
