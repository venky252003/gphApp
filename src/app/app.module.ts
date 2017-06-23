import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ClarityModule } from "clarity-angular";
import { GPHRoutingModule } from './app.router';
import { AppComponent } from './app.component';
import { UtlityComponent } from './utlity/utlity.component';
import { ApplicationComponent } from './application/application.component';
import { NavComponent } from './nav/nav.component';
import { AccountComponent } from './account/account.component';
import { HttpserviceService } from './service/httpservice.service';


@NgModule({
  declarations: [
    AppComponent,
    UtlityComponent,
    ApplicationComponent,
    NavComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule,
    GPHRoutingModule,
    ClarityModule.forRoot()
  ],
  providers: [HttpserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
