import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Home } from './components/home/home';
import { Register } from './components/register/register';
import { authGuard } from './interceptors/auth';

export const routes: Routes = [
  //Auth routes
  {
    path: '',
    canActivate: [authGuard],
    children: [
      {
        path: 'home',
        component: Home
      }
    ]
  },

  //Public
  {
    path: 'login',
    component: Login,
  },
  {
    path: 'register',
    component: Register,
  },
];
