import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Home } from './components/home/home';

export const routes: Routes = [
  {
    path: 'home',
    component: Home
  },
  {
    path: 'login',
    component: Login,
  }
];
