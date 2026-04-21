import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './header/header';
import { WorkExperience } from './work-experience/work-experience';
import { Skills } from './skills/skills';
import { Education } from './education/education';
import { Certificates } from './certificates/certificates';
import { Languages } from './languages/languages';
import { Interests } from './interests/interests';

@NgModule({
  declarations: [
    App,
    Header,
    WorkExperience,
    Skills,
    Education,
    Certificates,
    Languages,
    Interests
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay()),
  ],
  bootstrap: [App]
})
export class AppModule { }
