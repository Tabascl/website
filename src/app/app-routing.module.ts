import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainPageComponent } from './main-page/main-page.component';
import { CvComponent } from './cv/cv.component';
import { ProjectsComponent } from './projects/projects.component'

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'cv', component: CvComponent },
  { path: 'projects', component: ProjectsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
