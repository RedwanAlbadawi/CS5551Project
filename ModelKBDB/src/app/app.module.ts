import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ModeldbComponent } from './modeldb/modeldb.component';
import { routing } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
<<<<<<< HEAD
<<<<<<< HEAD
import { FilterPipe } from './Search/filter.pipe';
=======
import {AuthService} from './auth/auth.service';
import {AuthGuard} from './auth/auth.guard';
>>>>>>> 5db6eae507240e8fc56700f57662f4547c9bbbb1
=======
import {AuthService} from './auth/auth.service';
import {AuthGuard} from './auth/auth.guard';
>>>>>>> 5db6eae507240e8fc56700f57662f4547c9bbbb1

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyCsDkYE3JaFLz0UOB3mOkua-MbNilY9Jx4',
  authDomain: 'modelkb-db.firebaseapp.com',
  databaseURL: 'https://modelkb-db.firebaseio.com',
  projectId: 'modelkb-db',
  storageBucket: 'modelkb-db.appspot.com',
  messagingSenderId: '67869158599'
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ModeldbComponent,
    HeaderComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'modeldb',
        component: ModeldbComponent,
        canActivate: [AuthGuard]
      },
      {
        path: '',
        component: LoginComponent
      }
    ]),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [
    AngularFireAuth,
    AuthGuard,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
