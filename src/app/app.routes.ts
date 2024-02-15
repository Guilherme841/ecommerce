import { Routes } from '@angular/router';
import { LogoScreenComponent } from './components/logo-screen/logo-screen.component';
import { LoginComponent } from './components/login/login.component';

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
];
