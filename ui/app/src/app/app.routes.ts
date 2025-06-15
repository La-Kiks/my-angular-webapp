import { Routes } from '@angular/router';
import { LandingComponent } from './core/landing/landing.component';
import { ProjectOneComponent } from './core/project-one/project-one.component';
import { ProjectTwoComponent } from './core/project-two/project-two.component';
import { ProjectThreeComponent } from './core/project-three/project-three.component';
import { ProjectFourComponent } from './core/project-four/project-four.component';
import { CurriculumComponent } from './core/curriculum/curriculum.component';
import { ProposComponent } from './core/propos/propos.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'curriculum', component: CurriculumComponent },
  { path: 'about', component: ProposComponent },
  { path: 'antibug-solutions', component: ProjectOneComponent },
  { path: 'portfolio', component: ProjectTwoComponent },
  { path: 'prodrafts', component: ProjectThreeComponent },
  { path: 'cooldowns', component: ProjectFourComponent },
  // { path: '', redirectTo: '/landing', pathMatch: 'full' }  // Optional: Redirect to 'new' by default
];
