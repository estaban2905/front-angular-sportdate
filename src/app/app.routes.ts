import { Routes } from '@angular/router';
import { APP_ROUTES } from './constants/app-routing.constants';
import { authGuard } from '@core/guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: APP_ROUTES.DASHBOARD, pathMatch: 'full' },

  // ── Auth routes (public) ──────────────────────────────────────────────────
  {
    path: APP_ROUTES.LOGIN,
    loadComponent: () =>
      import('./pages/login/login.component').then(m => m.LoginComponent),
  },
  {
    path: APP_ROUTES.REGISTER,
    loadComponent: () =>
      import('./pages/register/register.component').then(m => m.RegisterComponent),
  },
  {
    path: APP_ROUTES.FORGOT_PASSWORD,
    loadComponent: () =>
      import('./pages/forgot-password/forgot-password.component').then(m => m.ForgotPasswordComponent),
  },

  // ── Protected routes ──────────────────────────────────────────────────────
  {
    path: APP_ROUTES.DASHBOARD,
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent),
  },
  {
    path: APP_ROUTES.MATCH,
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/match/match.component').then(m => m.MatchComponent),
  },
  {
    path: APP_ROUTES.EVENTOS,
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/eventos/eventos.component').then(m => m.EventosComponent),
  },
  {
    path: APP_ROUTES.GRUPOS,
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/grupos/grupos.component').then(m => m.GruposComponent),
  },
  {
    path: APP_ROUTES.RANKING,
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/ranking/ranking.component').then(m => m.RankingComponent),
  },
  {
    path: APP_ROUTES.CHAT,
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/chat/chat.component').then(m => m.ChatComponent),
  },
  {
    path: APP_ROUTES.PERFIL,
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/perfil/perfil.component').then(m => m.PerfilComponent),
  },
];
