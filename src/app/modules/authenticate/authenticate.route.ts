import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {LoginComponent} from './pages/login/login.component';
import {IndexAuthenticateComponent} from './index-authenticate/index-authenticate.component';
import {LogoutComponent} from './pages/logout/logout.component';



const AuthenticateRoutes: Routes = [
  {
    path: '',
    component: IndexAuthenticateComponent,  children: [
      { path: '', pathMatch: 'full', redirectTo: 'login' },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'logout',
        component: LogoutComponent
      },
    ]},
];


@NgModule({
  imports: [RouterModule.forChild(AuthenticateRoutes)],
  exports: [RouterModule]
})
export class AuthenticateRoutesModule {}
