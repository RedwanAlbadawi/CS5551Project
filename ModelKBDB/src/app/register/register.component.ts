import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private email: string;
  private password: string;
  alert = '';

  constructor(private firebaseauth: AngularFireAuth) { }

  ngOnInit() {
  }

  registerEvent(value: any) {
    this.email = value.email.toString();
    this.password = value.password.toString();
    console.log(this.email);
    console.log(this.password);

    try {
      this.firebaseauth.auth.createUserWithEmailAndPassword(this.email, this.password).then(() => {
      }).catch(() => {
        this.alert = 'Invalid email/password should be of 6 characters';
      });
    } catch (e) {
      console.error(e);
    }

  }

}
