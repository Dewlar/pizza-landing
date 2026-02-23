import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'pizza', pathMatch: 'full' },
  {
    path: 'pizza',
    loadComponent: () =>
      import('./features/pages/home-page/home-page.component').then((m) => m.HomePageComponent),
  },
  { path: '**', redirectTo: 'pizza', pathMatch: 'full' },
];
