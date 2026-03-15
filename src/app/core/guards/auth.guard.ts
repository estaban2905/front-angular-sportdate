/**
 * core/guards/auth.guard.ts
 *
 * Protects all app routes — redirects to /login if the user is not authenticated.
 * Used as a `canActivate` / `canActivateChild` guard in the router.
 */

import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { AuthSelectors } from '@store/auth';

export const authGuard: CanActivateFn = () => {
  const store = inject(Store);
  const router = inject(Router);

  const isAuthenticated = store.selectSnapshot(AuthSelectors.isAuthenticated);
  if (isAuthenticated) return true;

  return router.createUrlTree(['/login']);
};
