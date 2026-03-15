/**
 * shared/ui/compatibility-ring/compatibility-ring.component.ts
 *
 * Circular SVG progress ring that displays a compatibility percentage.
 * Used in the ProfileCard to show how well-matched two athletes are.
 *
 * Inputs: percentage (0–100), size (px), strokeWidth (px).
 */

import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-compatibility-ring',
  templateUrl: './compatibility-ring.component.html',
})
export class CompatibilityRingComponent {
  /** Compatibility percentage to display (0–100). */
  percentage = input.required<number>();
  /** Outer diameter of the SVG ring in pixels. */
  size = input<number>(80);
  /** Stroke width of the ring arc in pixels. */
  strokeWidth = input<number>(6);

  /** Inner radius derived from size and strokeWidth. */
  radius = computed(() => (this.size() - this.strokeWidth()) / 2);
  /** Full circumference of the ring. */
  circumference = computed(() => this.radius() * 2 * Math.PI);
  /** Dash offset to represent the current percentage. */
  offset = computed(() => this.circumference() - (this.percentage() / 100) * this.circumference());
}
