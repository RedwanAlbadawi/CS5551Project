import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private email: string;
  private password: string;
  alert = '';

  constructor(public authService: AuthService) {}

  loginEvent(value: any) {
    this.email = value.email.toString();
    this.password = value.password.toString();
    console.log(this.email);
    console.log(this.password);

    if (this.email !== '' && this.password !== '') {
      this.authService.login(this.email, this.password);
    }
  }

  ngOnInit() {
  }

}
