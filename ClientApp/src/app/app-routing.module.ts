import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { ForgotComponent } from './forgot/forgot.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';



const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'signup/login',
    component:LoginComponent
  },
  {
    path:'login/forgot',
    component:ForgotComponent
  },
  {
    path:'login/forgot/login',
    component:LoginComponent
  }
 
  
]; 


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }