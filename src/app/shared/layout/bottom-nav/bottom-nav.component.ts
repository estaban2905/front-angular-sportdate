// shared/layout/bottom-nav/bottom-nav.component.ts
// Mobile bottom navigation bar. Visible on screens smaller than md.

import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from '../../../services/theme.service';
import {
  LucideAngularModule,
  Heart, Calendar, MessageCircle, User, LayoutDashboard, Sun, Moon,
} from 'lucide-angular';
import { APP_ROUTES } from '../../../constants/app-routing.constants';

@Component({
  selector: 'app-bottom-nav',
  standalone: true,
  imports: [LucideAngularModule, RouterLink, RouterLinkActive],
  templateUrl: './bottom-nav.component.html',
  styleUrl: './bottom-nav.component.scss',
})
export class BottomNavComponent {
  readonly sunIcon = Sun;
  readonly moonIcon = Moon;

  readonly tabs = [
    { path: `/${APP_ROUTES.DASHBOARD}`, label: 'Inicio',  icon: LayoutDashboard },
    { path: `/${APP_ROUTES.MATCH}`,     label: 'Match',   icon: Heart },
    { path: `/${APP_ROUTES.EVENTOS}`,   label: 'Eventos', icon: Calendar },
    { path: `/${APP_ROUTES.CHAT}`,      label: 'Chat',    icon: MessageCircle },
    { path: `/${APP_ROUTES.PERFIL}`,    label: 'Perfil',  icon: User },
  ];

  constructor(public themeService: ThemeService) {}
}
