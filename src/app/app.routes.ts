import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home').then(m => m.HomeComponent) },
  { path: 'features', loadComponent: () => import('./pages/features/features').then(m => m.FeaturesComponent) },
  { path: 'pricing', loadComponent: () => import('./pages/pricing/pricing').then(m => m.PricingComponent) },
  { path: 'contact', loadComponent: () => import('./pages/contact/contact').then(m => m.ContactComponent) },
  { path: 'jobs', loadComponent: () => import('./pages/companies/list/companies-list').then(m => m.CompaniesListComponent) },
  { path: 'login', loadComponent: () => import('./pages/auth/login/login').then(m => m.LoginComponent) },
  { path: 'register', loadComponent: () => import('./pages/auth/register/register').then(m => m.RegisterComponent) },
  { path: 'profile', loadComponent: () => import('./pages/profile/profile').then(m => m.ProfileComponent), canActivate: [authGuard] },
  { path: '**', redirectTo: '' },
];
