import { Route } from '@angular/router';
import { OverviewComponent } from './components/overview/overview.component';
import { SkillsComponent } from './components/skills/skills.component';
import { HomeComponent } from './components/home/home.component';
import { ExperienceComponent } from './components/experience/experience.component';

export const appRoutes: Route[] = [
  {
    path: '', component: HomeComponent, children: [
      { path: '', component: OverviewComponent },
      { path: 'skills', component: SkillsComponent },
      { path: 'experience', component: ExperienceComponent }
    ]
  },
];
