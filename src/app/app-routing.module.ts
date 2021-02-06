import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { LoginComponent } from "../app/pages/user/login/login.component";
import { RegisterComponent } from "../app/pages/user/register/register.component";
import { ProfileComponent } from "../app/pages/user/profile/profile.component";
import { ResetpasswordComponent } from "../app/pages/user/resetpassword/resetpassword.component";
import {
  AngularFireAuthGuard,
  redirectLoggedInTo,
  redirectUnauthorizedTo,
} from "@angular/fire/auth-guard";

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(["login"]); // profile guard
const redirectUnauthorizedToHome = () => redirectLoggedInTo(["home"]); // register guard
const redirectLoggedInToHome = () => redirectLoggedInTo(["home"]); // login guard

const routes: Routes = [
  { path: "home", component: HomeComponent },
  {
    path: "login",
    component: LoginComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedInToHome },
  },
  { path: "resetpassword", component: ResetpasswordComponent },
  { path: "register", component: RegisterComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToHome } },
  {
    path: "profile",
    component: ProfileComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  { path: "**", redirectTo: "home", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
