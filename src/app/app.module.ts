import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UtlityComponent } from './utlity/utlity.component';
import { ApplicationComponent } from './application/application.component';

@NgModule({
  declarations: [
    AppComponent,
    UtlityComponent,
    ApplicationComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
