import { Route } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const appRoutes: Route[] = [
  { path: '', pathMatch: 'full', component: HomeComponent },
];
