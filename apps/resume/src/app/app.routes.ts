import { Route } from '@angular/router';
import { OverviewComponent } from './components/overview/overview.component';
import { SkillsComponent } from './components/skills/skills.component';

export const appRoutes: Route[] = [
  { path: '', component: OverviewComponent },
  { path: 'skills', component: SkillsComponent },
];
