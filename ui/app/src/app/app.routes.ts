import { Routes } from '@angular/router';
import { LandingComponent } from './core/landing/landing.component';
import { ProjectOneComponent } from './core/project-one/project-one.component';
import { ProjectTwoComponent } from './core/project-two/project-two.component';
import { ProjectThreeComponent } from './core/project-three/project-three.component';
import { ProjectFourComponent } from './core/project-four/project-four.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'project-one', component: ProjectOneComponent },
  { path: 'project-two', component: ProjectTwoComponent },
  { path: 'project-three', component: ProjectThreeComponent },
  { path: 'project-four', component: ProjectFourComponent },
  // { path: '', redirectTo: '/landing', pathMatch: 'full' }  // Optional: Redirect to 'new' by default
];
