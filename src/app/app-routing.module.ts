import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from '../app/pages/user/login/login.component';
import { RegisterComponent } from '../app/pages/user/register/register.component';
import { ProfileComponent } from '../app/pages/user/profile/profile.component';
import { ResetpasswordComponent } from '../app/pages/user/resetpassword/resetpassword.component'
import { ProfileGuardGuard } from './guard/profile-guard.guard';
import { LoginGuardGuard } from './guard/login-guard.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent, canActivate: [LoginGuardGuard] },
  { path: 'resetpassword', component: ResetpasswordComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [ProfileGuardGuard] },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
