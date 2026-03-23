import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Store } from '@ngxs/store';
import { HttpAuthService } from '../services/http-auth.service';
import { AuthActions } from '@store/auth';

let loggingOut = false;

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(HttpAuthService);
  const store = inject(Store);
  const token = authService.getToken();

  const outgoing = token
    ? req.clone({ setHeaders: { Authorization: `Bearer ${token}` } })
    : req;

  return next(outgoing).pipe(
    catchError(err => {
      const is401 = err instanceof HttpErrorResponse && err.status === 401;
      const isAuthEndpoint = req.url.includes('/auth/');
      if (is401 && !isAuthEndpoint && !loggingOut) {
        loggingOut = true;
        store.dispatch(new AuthActions.Logout());
        setTimeout(() => { loggingOut = false; }, 3000);
      }
      return throwError(() => err);
    }),
  );
};
