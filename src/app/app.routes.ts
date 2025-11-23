import { Routes } from '@angular/router';
import { Layout } from './layout/layout';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./dashboard/dashboard').then((m) => m.Dashboard)
      },
{
  path: 'stats',
  loadComponent: () => import('./stats/stats').then(m => m.Stats)
},
{
  path: 'users',
  loadComponent: () => import('./users/users').then(m => m.Users)
},
{
  path: 'tickets/create',
  loadComponent: () =>
    import('./ticket-form/ticket-form').then(m => m.TicketForm)
},
{
  path: 'tickets/edit/:id',
  loadComponent: () =>
    import('./ticket-form/ticket-form').then(m => m.TicketForm)
},
{
  path: 'profile',
  loadComponent: () => import('./profile/profile').then(m => m.Profile)
},

{
  path: 'settings',
  loadComponent: () => import('./settings/settings').then(m => m.Settings)
},
   {
  path: 'admin',
  loadComponent: () => import('./admin/admin').then(m => m.Admin)
},
{
  path: 'tickets',
  loadComponent: () => import('./tickets-list/tickets-list').then(m => m.TicketsList)
},

      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  }
];
