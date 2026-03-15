/**
 * shared/ui/achievement-badge/achievement-badge.component.ts
 *
 * Displays an achievement badge with rarity-based styling, a lock state
 * for unearned badges, and a hover tooltip showing details.
 *
 * Inputs: achievement (Achievement), size ('sm' | 'md' | 'lg').
 */

import { Component, computed, input } from '@angular/core';
import { LucideAngularModule, Lock } from 'lucide-angular';
import { Achievement } from '../../../core/models';

@Component({
  selector: 'app-achievement-badge',
  templateUrl: './achievement-badge.component.html',
  styleUrl: './achievement-badge.component.scss',
  imports: [LucideAngularModule],
})
export class AchievementBadgeComponent {
  /** The achievement data to render. */
  achievement = input.required<Achievement>();
  /** Badge size variant. */
  size = input<'sm' | 'md' | 'lg'>('md');

  readonly lockIcon = Lock;

  /** True when the achievement has not been unlocked yet. */
  isLocked = computed(() => !this.achievement().unlockedAt);

  /** Tailwind size + text-size classes based on the size input. */
  sizeClasses = computed(() => {
    const map: Record<string, string> = {
      sm: 'w-10 h-10 text-lg',
      md: 'w-16 h-16 text-3xl',
      lg: 'w-24 h-24 text-5xl',
    };
    return map[this.size()];
  });

  /** Tailwind border + background classes based on rarity. */
  rarityColors = computed(() => {
    const map: Record<string, string> = {
      common:    'border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800',
      rare:      'border-blue-200 bg-blue-50 shadow-blue-100 dark:border-blue-800 dark:bg-blue-900/30 dark:shadow-none',
      epic:      'border-purple-200 bg-purple-50 shadow-purple-100 dark:border-purple-800 dark:bg-purple-900/30 dark:shadow-none',
      legendary: 'border-yellow-300 bg-yellow-50 shadow-yellow-100 dark:border-yellow-700 dark:bg-yellow-900/30 dark:shadow-none',
    };
    return map[this.achievement().rarity];
  });

  /** Combined ring classes for the badge circle. */
  ringClasses = computed(() => {
    const base = this.sizeClasses() + ' rounded-full flex items-center justify-center border-2 transition-all duration-300 relative z-10';
    if (this.isLocked()) {
      return base + ' bg-gray-100 border-gray-200 grayscale opacity-70 dark:bg-[#22223A] dark:border-[#2D2D4A]';
    }
    return base + ' ' + this.rarityColors() + ' shadow-lg';
  });
}
