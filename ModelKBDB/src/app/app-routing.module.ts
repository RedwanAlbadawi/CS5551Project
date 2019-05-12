import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ModeldbComponent } from './modeldb/modeldb.component';
import { ModeldbUploadComponent } from './modeldb-upload/modeldb-upload.component';
import { ModeldbDetailComponent } from './modeldb-detail/modeldb-detail.component';
import { ChartModule} from './chart/chart.module';
import { ChartComponent} from './chart/chart.component';
import {AuthGuard} from './auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
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
    path: 'modeldb/upload',
    component: ModeldbUploadComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'modeldb/details/:id',
    component: ModeldbDetailComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'modeldb/chart',
    component: ChartComponent,
    canActivate: [AuthGuard]
  }
];

export const routing = RouterModule.forRoot(routes);

export class AppRoutingModule { }
