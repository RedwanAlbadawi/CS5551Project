import * as firebase from 'firebase/app';
import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user$: Observable<firebase.User>;

  constructor(private router: Router, private afAuth: AngularFireAuth) {
    this.user$ = this.afAuth.authState;
  }

  login(email, password) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(_ => this.router.navigate(['/modeldb']))
      .catch(error => console.log('auth error', error));
  }

  logout() {
    this.afAuth.auth.signOut()
      .then(_ => this.router.navigate(['/']));
  }
}
