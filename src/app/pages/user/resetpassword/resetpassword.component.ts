import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {}

  async resetPassword(email: string){
    await this.auth.resetPassword(email);
    return await this.router.navigate(['/login']);
  }
}
