import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PolicyListComponent } from './policy-list/policy-list.component';
import {HttpClientModule} from '@angular/common/http';
import { PolicyEditComponent } from './policy-edit/policy-edit.component';
import { PolicyAddComponent } from './policy-add/policy-add.component';
import { LoginComponent } from './login/login.component';
 import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PolicyListComponent,
    PolicyEditComponent,
    PolicyAddComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent

 
  ],
  imports: [
   
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
