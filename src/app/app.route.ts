import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AuthenticateModule} from './modules/authenticate/authenticate.module';
import {environment as ENV} from '../environments/environment';
import {DashboardModule} from './modules/dashboard/dashboard.module';
import {AuthenticationGuardService} from './security/authentication-guard.service';




export function loadAuthenticatedModule() {
  return AuthenticateModule;
}

export function loadDashboardModule() {
  return DashboardModule;
}


export function routes(): Routes {
  return [
    {
      path: '',
      redirectTo: 'authenticate',
      pathMatch: 'full'
    },
    {
      path: 'authenticate',
      loadChildren: ENV.production ? './modules/authenticate/authenticate.module#AuthenticateModule' : loadAuthenticatedModule
    },
    {
      path: 'dashboard',
      canActivate: [AuthenticationGuardService],
      loadChildren: ENV.production ? './modules/dashboard/dashboard.module#DashboardModule' : loadDashboardModule
    }
  ];

}



@NgModule({
  imports: [RouterModule.forRoot(routes(), {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutesModule {}
