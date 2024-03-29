import { Routes } from '@angular/router';

import { LogoScreenComponent } from './components/logo-screen/logo-screen.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HeaderComponent } from './ui/header/header.component';

export const routes: Routes = [
  {
    path: '',
    component: LogoScreenComponent,
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./components/login/login.component').then(
        (m) => m.LoginComponent
      ),
  },
  {
    path: 'sign-up',
    loadComponent: () =>
      import('./components/sign-up/sign-up.component').then(
        (m) => m.SignUpComponent
      ),
  },
  {
    path: 'home-page',
    loadComponent: () =>
      import('./components/home-page/home-page.component').then(
        (m) => m.HomePageComponent
      ),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./ui/header/header.component').then((m) => m.HeaderComponent),
      },
    ],
  },
  {
    path: 'forgot-pass-page',
    loadComponent: () =>
      import('./components/forgot-pass/forgot-pass.component').then(
        (m) => m.ForgotPassComponent
      ),
  },
];
