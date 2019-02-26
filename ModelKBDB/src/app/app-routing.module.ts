import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ModeldbComponent } from './modeldb/modeldb.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'modeldb',
    component: ModeldbComponent
  }
];

export const routing = RouterModule.forRoot(routes);

export class AppRoutingModule { }
