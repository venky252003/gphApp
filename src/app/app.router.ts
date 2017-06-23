import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationComponent } from '../app/application/application.component';
import { AccountComponent } from './account/account.component';

export const routes: Routes = [
    { path: 'home', component: ApplicationComponent },
    { path: 'account', component: AccountComponent},
    { path: '**', pathMatch:'full', redirectTo: 'home' }
];

//export const appRouting = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class GPHRoutingModule { }

//export const routedComponents = [NameComponent];