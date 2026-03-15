import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './shared/layout/sidebar/sidebar.component';
import { BottomNavComponent } from './shared/layout/bottom-nav/bottom-nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, BottomNavComponent],
  template: `
    <div class="min-h-screen bg-[#F8FAFC] dark:bg-[#0F0F1A] flex text-[#1E293B] dark:text-[#F0F0F5] transition-colors duration-300">

      <!-- Desktop Sidebar -->
      <app-sidebar />

      <!-- Main content -->
      <main class="flex-1 md:ml-64 w-full min-h-screen overflow-x-hidden">
        <router-outlet />
      </main>

      <!-- Mobile Bottom Nav -->
      <div class="md:hidden">
        <app-bottom-nav />
      </div>
    </div>
  `,
})
export class App {}
