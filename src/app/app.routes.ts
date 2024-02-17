import { Routes } from '@angular/router';
import { LogoScreenComponent } from './components/logo-screen/logo-screen.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

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
];
