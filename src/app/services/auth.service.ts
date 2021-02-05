import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";
import firebase from "firebase/app";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  authState: any = null;

  constructor(private afu: AngularFireAuth, private router: Router) {
    this.afu.authState.subscribe((auth) => {
      console.log(auth);
      this.authState = auth;
      console.log(this.authState);
    });
  }

  // all firebase getdata functions

  get currentUserId(): string {
    return this.authState !== null ? this.authState.uid : "";
  }

  get currentUserName(): string {
    return this.authState.email;
  }

  get currentUser(): any {
    return this.authState !== null ? this.authState : null;
  }

  get isUserEmailLoggedIn(): boolean {
    if (this.authState !== null) {
      return true;
    } else {
      return false;
    }
  }

  async registerWithEmail(email: string, password: string) {
    try {
      const user = await this.afu.createUserWithEmailAndPassword(
        email,
        password
      );
      this.authState = user;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async loginWithEmail(email: string, password: string) {
    try {
      const user = await this.afu.signInWithEmailAndPassword(email, password);
      this.authState = user;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  // reset password function
  async resetPassword(email: string) {
    try {
      await firebase.auth().sendPasswordResetEmail(email);
      return console.log("We've sent a reset password email");
    } catch (error) {
      return console.log(error.message);
    }
  }

  singout(): void {
    this.afu.signOut();
    this.router.navigate(["/home"]);
  }
}
