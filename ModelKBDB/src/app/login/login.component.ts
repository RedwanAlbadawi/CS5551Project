import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private email: string;
  private password: string;
  alert = '';

  constructor(private firebaseauth: AngularFireAuth) {}

  loginEvent(value: any) {
    this.email = value.email.toString();
    this.password = value.password.toString();
    console.log(this.email);
    console.log(this.password);

    if (this.email !== '' && this.password !== '') {
      try {
        this.firebaseauth.auth.signInWithEmailAndPassword(this.email, this.password).then(() => {
          console.log('logged in');
        }).catch(() => {
          this.alert = 'Try again. Invalid Credentials';
        });
      } catch (e) {
        console.error(e);
      }
    }

  }

  ngOnInit() {
  }

}
