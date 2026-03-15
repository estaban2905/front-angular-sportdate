// shared/layout/sidebar/sidebar.component.ts
// Desktop sidebar navigation. Visible on md+ breakpoints.

import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from '../../../services/theme.service';
import { XpProgressBarComponent } from '../../ui/xp-progress-bar/xp-progress-bar.component';
import { USER_STATS } from '../../../data';
import {
  LucideAngularModule,
  LayoutDashboard, Heart, Calendar, Users, Trophy, MessageCircle, Flame, Sun, Moon,
} from 'lucide-angular';
import { APP_ROUTES } from '../../../constants/app-routing.constants';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [LucideAngularModule, XpProgressBarComponent, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  readonly sunIcon = Sun;
  readonly moonIcon = Moon;
  readonly flameIcon = Flame;
  readonly userStats = USER_STATS;

  readonly menuItems = [
    { path: `/${APP_ROUTES.DASHBOARD}`, label: 'Dashboard',   icon: LayoutDashboard },
    { path: `/${APP_ROUTES.MATCH}`,     label: 'Descubrir',   icon: Heart },
    { path: `/${APP_ROUTES.EVENTOS}`,   label: 'Eventos',     icon: Calendar },
    { path: `/${APP_ROUTES.GRUPOS}`,    label: 'Comunidades', icon: Users },
    { path: `/${APP_ROUTES.RANKING}`,   label: 'Ranking',     icon: Trophy },
    { path: `/${APP_ROUTES.CHAT}`,      label: 'Mensajes',    icon: MessageCircle },
  ];

  constructor(public themeService: ThemeService) {}
}
