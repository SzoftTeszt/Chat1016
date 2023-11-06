import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { SingInComponent } from './sing-in/sing-in.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const routes: Routes = [
  {path:"signup", component:SignUpComponent},
  {path:"home", component:HomeComponent},
  {path:"verifyemail", component:VerifyEmailComponent},
  {path:"signin", component:SingInComponent},
  {path:"forgotpassword", component:ForgotPasswordComponent},
  {path:"", component:HomeComponent},
  {path:"**", component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
