/**
 * core/guards/admin.guard.ts
 *
 * Restricts /configuracion to admin users only.
 * Add authorized email addresses to ADMIN_EMAILS below.
 * For production, replace with Firebase custom claims check.
 */

import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { AuthSelectors } from '@store/auth';

/**
 * Add the email addresses of users who should have admin access.
 * Example: ['admin@sportdate.com', 'tu@email.com']
 */
const ADMIN_EMAILS: string[] = [];

export const adminGuard: CanActivateFn = () => {
  const store  = inject(Store);
  const router = inject(Router);

  const user = store.selectSnapshot(AuthSelectors.user);
  if (user?.email && ADMIN_EMAILS.includes(user.email)) return true;

  return router.createUrlTree(['/dashboard']);
};
