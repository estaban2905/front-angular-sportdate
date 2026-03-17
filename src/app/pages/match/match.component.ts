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

import { Component, inject, OnInit, computed } from '@angular/core';
import { LucideAngularModule, Info, Shield, MapPin, Clock, Activity, Star, Search } from 'lucide-angular';
import { Store } from '@ngxs/store';
import { UserSelectors, UserActions } from '@store/user';
import { CommunitiesSelectors, CommunitiesActions } from '@store/communities';
import { ProfileCardComponent } from '../../shared/ui/profile-card/profile-card.component';
import { GruposScrollComponent } from '../../shared/ui/grupos-scroll/grupos-scroll.component';
import { ConfettiEffectComponent } from '../../shared/ui/confetti-effect/confetti-effect.component';
import { MATCH_SPORT_FILTERS } from '@core/constants/sports.constants';
import { FilterProfilesUseCase } from '@core/use-cases/match/filter-profiles.use-case';

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
  // Store & Use Cases
  // ---------------------------------------------------------------------------
  private readonly store = inject(Store);
  private readonly filterProfilesUseCase = inject(FilterProfilesUseCase);

  private readonly allProfiles = this.store.selectSignal(UserSelectors.profiles);
  readonly groups = this.store.selectSignal(CommunitiesSelectors.groups);

  // ---------------------------------------------------------------------------
  // Local UI state
  // ---------------------------------------------------------------------------
  readonly filters = MATCH_SPORT_FILTERS;
  currentIndex = 0;
  showConfetti = false;
  showMatchOverlay = false;
  activeFilter: string = MATCH_SPORT_FILTERS[0];

  /** Profiles filtered by the active sport via FilterProfilesUseCase. */
  readonly profiles = computed(() =>
    this.filterProfilesUseCase.execute(this.allProfiles(), this.activeFilter),
  );

  /** The profile card currently on top of the stack. */
  get currentProfile() {
    const all = this.profiles();
    return all[this.currentIndex % (all.length || 1)];
  }

  handleNext(): void {
    this.currentIndex++;
  }

  setFilter(filter: string): void {
    this.activeFilter = filter;
    this.currentIndex = 0;
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
