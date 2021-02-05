import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {
  authState = null;
  constructor(private auth: AuthService, private afu: AngularFireAuth, private router: Router) {
    this.afu.authState.subscribe((auth => {
      console.log(auth);
      this.authState=auth;
    }));
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log(this.authState);
      if (this.authState) {
        this.router.navigate(['/home']);
        return false;
      }
      return true;

    }
  }
