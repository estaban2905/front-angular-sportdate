// shared/layout/sidebar/sidebar.component.ts
// Desktop sidebar navigation. Visible on md+ breakpoints.

import { Component, OnInit, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from '../../../core/services/theme.service';
import { GeoService } from '../../../core/services/geo.service';
import { XpProgressBarComponent } from '../../ui/xp-progress-bar/xp-progress-bar.component';
import { SettingsModalComponent } from '../../ui/settings-modal/settings-modal.component';
import { USER_STATS } from '../../../data';
import {
  LucideAngularModule,
  LayoutDashboard, Heart, Calendar, Users, Trophy, MessageCircle, Flame, Settings, BookMarked, MapPin,
} from 'lucide-angular';
import { APP_ROUTES } from '../../../constants/app-routing.constants';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [LucideAngularModule, XpProgressBarComponent, SettingsModalComponent, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent implements OnInit {
  readonly flameIcon = Flame;
  readonly MapPinIcon = MapPin;
  readonly userStats = USER_STATS;

  private readonly geo = inject(GeoService);
  readonly cityName = this.geo.cityName;
  readonly cityLoading = this.geo.cityLoading;

  ngOnInit(): void {
    this.geo.resolveCityName();
  }

  readonly menuItems = [
    { path: `/${APP_ROUTES.DASHBOARD}`,   label: 'Dashboard',    icon: LayoutDashboard },
    { path: `/${APP_ROUTES.MATCH}`,       label: 'Descubrir',    icon: Heart },
    { path: `/${APP_ROUTES.EVENTOS}`,     label: 'Eventos',      icon: Calendar },
    { path: `/${APP_ROUTES.MIS_EVENTOS}`, label: 'Mis Eventos',  icon: BookMarked },
    { path: `/${APP_ROUTES.GRUPOS}`,      label: 'Comunidades',  icon: Users },
    { path: `/${APP_ROUTES.RANKING}`,     label: 'Ranking',      icon: Trophy },
    { path: `/${APP_ROUTES.CHAT}`,        label: 'Mensajes',     icon: MessageCircle },
    { path: `/${APP_ROUTES.CONFIGURACION}`, label: 'Configuración', icon: Settings },
  ];

  constructor(public themeService: ThemeService) {}
}
