import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { CatalogComponent } from './catalog';
import { CachingComponent } from './caching';
import { NoContentComponent } from './no-content';
import { AuthComponent } from './auth';
import { LogsComponent } from './logs';
import { UsersComponent } from './users';
import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'caching',  component: CachingComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'logs', component: LogsComponent },
  { path: 'users', component: UsersComponent },

  { path: 'detail', loadChildren: './+detail#DetailModule'},
  { path: 'barrel', loadChildren: './+barrel#BarrelModule'},
  { path: '**',    component: NoContentComponent },
];
