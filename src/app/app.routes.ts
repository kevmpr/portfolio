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
        path: 'projects',
        loadComponent: () =>
          import('./portfolio/pages/projects-page/projects-page.component'),
      },
      {
        path: 'skills',
        loadComponent: () =>
          import('./portfolio/pages/skills-page/skills-page.component'),
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
