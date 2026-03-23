/**
 * core/guards/no-auth.guard.ts
 *
 * Redirects already-authenticated users away from public routes
 * (/login, /register, /forgot-password) straight to /dashboard.
 */

import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { AuthSelectors } from '@store/auth';

export const noAuthGuard: CanActivateFn = () => {
  const store  = inject(Store);
  const router = inject(Router);

  const isAuthenticated = store.selectSnapshot(AuthSelectors.isAuthenticated);
  if (isAuthenticated) return router.createUrlTree(['/dashboard']);

  return true;
};
