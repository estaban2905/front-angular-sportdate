import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './shared/layout/sidebar/sidebar.component';
import { BottomNavComponent } from './shared/layout/bottom-nav/bottom-nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, BottomNavComponent],
  template: `
    <div class="min-h-screen bg-[#FAFAFA] dark:bg-[#0F0F1A] flex text-[#1A1A2E] dark:text-[#F0F0F5] font-sans transition-colors duration-300">
      <app-sidebar />
      <main class="flex-1 md:ml-64 w-full min-h-screen relative overflow-x-hidden">
        <router-outlet />
      </main>
      <div class="md:hidden">
        <app-bottom-nav />
      </div>
    </div>
  `,
})
export class AppComponent { }
