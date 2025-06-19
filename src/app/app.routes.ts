import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'portfolio',
    loadComponent: () =>
      import('./porfolio/pages/portfolio-page/portfolio-page.component'),
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./porfolio/pages/home-page/home-page.component'),
      },
      {
        path: '**',
        redirectTo: 'home',
      }
    ],
  },
  {
    path: '**',
    redirectTo: 'portfolio',
  },
];
