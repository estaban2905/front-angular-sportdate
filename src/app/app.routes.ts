import { Routes } from '@angular/router';
import { APP_ROUTES } from './constants/app-routing.constants';
import { authGuard } from '@core/guards/auth.guard';
import { noAuthGuard } from '@core/guards/no-auth.guard';
import { adminGuard } from '@core/guards/admin.guard';

export const routes: Routes = [
  { path: '', redirectTo: APP_ROUTES.DASHBOARD, pathMatch: 'full' },

  // ── Auth routes (public, redirect if already logged in) ──────────────────
  {
    path: APP_ROUTES.LOGIN,
    canActivate: [noAuthGuard],
    loadComponent: () =>
      import('./pages/login/login.component').then(m => m.LoginComponent),
  },
  {
    path: APP_ROUTES.REGISTER,
    canActivate: [noAuthGuard],
    loadComponent: () =>
      import('./pages/register/register.component').then(m => m.RegisterComponent),
  },
  {
    path: APP_ROUTES.FORGOT_PASSWORD,
    canActivate: [noAuthGuard],
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
    path: APP_ROUTES.DESCUBRIR,
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/descubrir/descubrir.component').then(m => m.DescubrirComponent),
  },
  {
    path: APP_ROUTES.EVENTOS,
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/eventos/eventos.component').then(m => m.EventosComponent),
  },
  // ⚠ 'eventos/mis' must come BEFORE 'eventos/:id' so "mis" is not treated as an id
  {
    path: APP_ROUTES.MIS_EVENTOS,
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/mis-eventos/mis-eventos.component').then(m => m.MisEventosComponent),
  },
  {
    path: `${APP_ROUTES.EVENTOS}/:id`,
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/evento-detalle/evento-detalle.component').then(m => m.EventoDetalleComponent),
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
  {
    path: APP_ROUTES.CONFIGURACION,
    canActivate: [authGuard],
    loadChildren: () =>
      import('./pages/configuracion/configuracion.routes').then(m => m.configuracionRoutes),
  },
];
