import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'portfolio',
    loadComponent: () =>
      import('./portfolio/pages/portfolio-page/portfolio-page.component'),
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./portfolio/pages/home-page/home-page.component'),
      },
      {
        path: 'aboutme',
        loadComponent: () =>
          import('./portfolio/pages/aboutme-page/aboutme-page.component'),
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('./portfolio/pages/contact-page/contact-page.component'),
      },
      {
        path: '**',
        redirectTo: 'home',
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'portfolio',
  },
];
