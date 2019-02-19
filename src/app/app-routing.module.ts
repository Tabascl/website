import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainPageComponent } from './main-page/main-page.component';
import { CvComponent } from './cv/cv.component';
import { ProjectsComponent } from './projects/projects.component'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: MainPageComponent, data: { animation: 'Home' } },
  { path: 'cv', component: CvComponent, data: { animation: 'CV' } },
  { path: 'projects', component: ProjectsComponent, data: { animation: 'Projects' } }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
