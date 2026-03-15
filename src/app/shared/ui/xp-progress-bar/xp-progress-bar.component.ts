/**
 * shared/ui/xp-progress-bar/xp-progress-bar.component.ts
 *
 * Reusable XP progress bar component.
 * Renders a labelled gradient progress bar indicating current XP
 * relative to the XP needed for the next level.
 *
 * Inputs: currentXP, maxXP, level, size ('sm' | 'md' | 'lg'), showLabel.
 */

import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-xp-progress-bar',
  templateUrl: './xp-progress-bar.component.html',
})
export class XpProgressBarComponent {
  /** Current XP amount. */
  currentXP = input.required<number>();
  /** XP required for the next level. */
  maxXP = input.required<number>();
  /** Current level number displayed in the label. */
  level = input.required<number>();
  /** Bar height variant. */
  size = input<'sm' | 'md' | 'lg'>('md');
  /** Whether to show the "Nivel X / Y XP" label row. */
  showLabel = input<boolean>(true);

  /** Computed fill percentage clamped to 0–100. */
  percentage = computed(() =>
    Math.min(100, (this.currentXP() / this.maxXP()) * 100)
  );

  /** Tailwind height class derived from the size input. */
  heightClass = computed(() => {
    const sizeMap: Record<string, string> = {
      sm: 'h-1.5',
      md: 'h-2.5',
      lg: 'h-4',
    };
    return sizeMap[this.size()];
  });
}
