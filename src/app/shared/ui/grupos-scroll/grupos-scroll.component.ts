// shared/ui/grupos-scroll/grupos-scroll.component.ts
// Horizontal scrollable group card row used in the match screen.

import { Component, input } from '@angular/core';
import { LucideAngularModule, Users, Flame } from 'lucide-angular';
import { Group } from '@core/models';

@Component({
  selector: 'app-grupos-scroll',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './grupos-scroll.component.html',
  styleUrl: './grupos-scroll.component.scss',
})
export class GruposScrollComponent {
  groups = input.required<Group[]>();

  readonly usersIcon = Users;
  readonly flameIcon = Flame;
}
