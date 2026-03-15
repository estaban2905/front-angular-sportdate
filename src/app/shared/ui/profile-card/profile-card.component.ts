/**
 * shared/ui/profile-card/profile-card.component.ts
 *
 * Swipeable athlete profile card used in the Match/Discover screen.
 * Shows the athlete's photo gradient, emoji avatar, location, sports tags,
 * bio, compatibility ring, and accept/skip action buttons.
 *
 * Inputs:  profile (Profile)
 * Outputs: accept (void), skip (void)
 */

import { Component, input, output } from '@angular/core';
import { LucideAngularModule, X, Heart, MapPin } from 'lucide-angular';
import { Profile } from '../../../core/models';
import { CompatibilityRingComponent } from '../compatibility-ring/compatibility-ring.component';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.scss',
  imports: [CompatibilityRingComponent, LucideAngularModule],
})
export class ProfileCardComponent {
  /** The athlete profile to display. */
  profile = input.required<Profile>();
  /** Emitted when the user taps the accept / heart button. */
  accept = output<void>();
  /** Emitted when the user taps the skip / X button. */
  skip = output<void>();

  readonly xIcon = X;
  readonly heartIcon = Heart;
  readonly mapPinIcon = MapPin;
}
