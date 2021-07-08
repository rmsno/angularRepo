import { NgModule } from '@angular/core';
import { FormControl, FormControlName, FormGroup, NgModel } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

import { FormsModule } from '@angular/forms'; 

import { ReactiveFormsModule } from '@angular/forms'; 
 import { timer } from 'rxjs';
import { ConfirmComponent } from './confirm/confirm.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    ConfirmComponent,
    routingComponents,
  AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
