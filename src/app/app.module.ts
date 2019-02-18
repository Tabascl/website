import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HighlightModule } from 'ngx-highlightjs';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './card/card.component';
import { AppRoutingModule } from './app-routing.module';
import { CvComponent } from './cv/cv.component';
import { ProjectsComponent } from './projects/projects.component';

import cpp from 'highlight.js/lib/languages/cpp';

export function hljsLanguages() {
  return [
    {name: 'cpp', func: cpp}
  ];
}

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    NavbarComponent,
    CardComponent,
    CvComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighlightModule.forRoot({
      languages: hljsLanguages
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
