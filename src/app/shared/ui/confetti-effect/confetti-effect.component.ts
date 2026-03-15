// shared/ui/confetti-effect/confetti-effect.component.ts
// Confetti burst overlay shown when the user gets a match.

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confetti-effect',
  standalone: true,
  templateUrl: './confetti-effect.component.html',
  styleUrl: './confetti-effect.component.scss',
})
export class ConfettiEffectComponent implements OnInit {
  pieces: { id: number; color: string; tx: number; ty: number; rot: number; scale: number; delay: number }[] = [];

  private readonly colors = ['#FF6B6B', '#FF8E8E', '#0EA5E9', '#FCD34D', '#A78BFA'];

  ngOnInit(): void {
    this.pieces = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      color: this.colors[i % this.colors.length],
      tx: (Math.random() - 0.5) * 400,
      ty: (Math.random() - 0.5) * 400,
      rot: Math.random() * 360,
      scale: Math.random() * 1 + 0.5,
      delay: Math.random() * 200,
    }));
  }
}
