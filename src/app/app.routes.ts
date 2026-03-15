import { Routes } from '@angular/router';
import { APP_ROUTES } from './constants/app-routing.constants';

export const routes: Routes = [
  { path: '', redirectTo: APP_ROUTES.DASHBOARD, pathMatch: 'full' },
  {
    path: APP_ROUTES.DASHBOARD,
    loadComponent: () =>
      import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent),
  },
  {
    path: APP_ROUTES.MATCH,
    loadComponent: () =>
      import('./pages/match/match.component').then(m => m.MatchComponent),
  },
  {
    path: APP_ROUTES.EVENTOS,
    loadComponent: () =>
      import('./pages/eventos/eventos.component').then(m => m.EventosComponent),
  },
  {
    path: APP_ROUTES.GRUPOS,
    loadComponent: () =>
      import('./pages/grupos/grupos.component').then(m => m.GruposComponent),
  },
  {
    path: APP_ROUTES.RANKING,
    loadComponent: () =>
      import('./pages/ranking/ranking.component').then(m => m.RankingComponent),
  },
  {
    path: APP_ROUTES.CHAT,
    loadComponent: () =>
      import('./pages/chat/chat.component').then(m => m.ChatComponent),
  },
  {
    path: APP_ROUTES.PERFIL,
    loadComponent: () =>
      import('./pages/perfil/perfil.component').then(m => m.PerfilComponent),
  },
];
