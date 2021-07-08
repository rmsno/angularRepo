import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { Router } from '@angular/router';
import { AppComponent } from './app.component';
const routes: Routes = [
  {path: 'confirm',component: ConfirmComponent},
 // {path: 'contact-form',redirectTo: '/AppComponent' , pathMatch: 'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[ConfirmComponent,ContactFormComponent];

