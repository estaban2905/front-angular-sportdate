/**
 * pages/configuracion/configuracion.routes.ts
 *
 * Child routes for the /configuracion section.
 *
 *   /configuracion            → InicioComponent  (collection grid + global actions)
 *   /configuracion/:nombre    → ColeccionComponent (table CRUD for a collection)
 */

import { Routes } from '@angular/router';

export const configuracionRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./configuracion.component').then(m => m.ConfiguracionComponent),
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () =>
          import('./inicio/inicio.component').then(m => m.InicioComponent),
      },
      {
        path: ':nombre',
        loadComponent: () =>
          import('./coleccion/coleccion.component').then(m => m.ColeccionComponent),
      },
    ],
  },
];
