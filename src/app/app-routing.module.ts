import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PolicyListComponent } from './policy-list/policy-list.component';
import { PolicyEditComponent } from './policy-edit/policy-edit.component';
import { PolicyAddComponent } from './policy-add/policy-add.component';
import { LoginComponent } from './login/login.component';
 import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'Policy',component:PolicyListComponent},
  {path:'edit/:id',component:PolicyEditComponent}
  ,{path:'padd',component:PolicyAddComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'home',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
