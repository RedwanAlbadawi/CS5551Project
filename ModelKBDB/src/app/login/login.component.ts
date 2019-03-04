import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private firebaseauth: AngularFireAuth) {

  }

  loginEvent(value: any) {
    console.log('works');
  }

  ngOnInit() {
  }

}
