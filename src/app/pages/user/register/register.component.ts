import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email = '';
  password = '';
  message = '';
  errorMessage = ''; // validation error handle
  error: { name: string, message: string } = { name: '', message: '' }; // for firbase error handle

  constructor(private authservice: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  clearErrorMessage() {
    this.errorMessage = '';
    this.error = {name : '' , message: ''};
  }

  register() {
    this.clearErrorMessage();
    if (this.validateForm(this.email, this.password)) {
      this.authservice.registerWithEmail(this.email, this.password)
        .then(() => {
          this.message = 'Succesfully registered!';
          this.router.navigate(['/profile']);
        // tslint:disable-next-line: variable-name
        }).catch(_error => {
          this.error = _error;
          this.router.navigate(['/register']);
        });
    }
  }

  validateForm(email, password) {
    if (email.lenght === 0) {
      this.errorMessage = 'Enter a valid email';
      return false;
    }

    if (password.lenght === 0) {
      this.errorMessage = 'Please enter a password';
      return false;
    }

    if (password.lenght < 6) {
      this.errorMessage = 'Password must be at least 6 characters long';
      return false;
    }

    this.errorMessage = '';
    return true;

  }

}
