import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { filter, map, skip } from 'rxjs/operators';
import { toSignal } from '@angular/core/rxjs-interop';
import { Store } from '@ngxs/store';
import { SidebarComponent } from './shared/layout/sidebar/sidebar.component';
import { BottomNavComponent } from './shared/layout/bottom-nav/bottom-nav.component';
import { AuthService } from './core/services/auth.service';
import { AuthActions } from './store/auth/auth.actions';

const AUTH_ROUTES = ['/login', '/register'];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, BottomNavComponent],
  template: `
    <div class="min-h-screen bg-[#FAFAFA] dark:bg-[#0F0F1A] flex text-[#1A1A2E] dark:text-[#F0F0F5] font-sans transition-colors duration-300">
      @if (!isAuthRoute()) {
        <app-sidebar />
      }
      <main [class]="isAuthRoute() ? 'flex-1 w-full min-h-screen' : 'flex-1 md:ml-64 w-full min-h-screen relative overflow-x-hidden'">
        <router-outlet />
      </main>
      @if (!isAuthRoute()) {
        <div class="md:hidden">
          <app-bottom-nav />
        </div>
      }
    </div>
  `,
})
export class AppComponent implements OnInit {
  private readonly authService = inject(AuthService);
  private readonly store = inject(Store);
  private readonly router = inject(Router);

  readonly isAuthRoute = toSignal(
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      map(e => AUTH_ROUTES.includes((e as NavigationEnd).urlAfterRedirects)),
    ),
    { initialValue: AUTH_ROUTES.includes(this.router.url) },
  );

  async ngOnInit(): Promise<void> {
    // Sync Firebase auth state → NGXS store on every boot
    // skip(1) — first emission was already handled by provideAppInitializer
    this.authService.authState$.pipe(skip(1)).subscribe(user => {
      this.store.dispatch(new AuthActions.SetUser(user));
    });

  }
}
