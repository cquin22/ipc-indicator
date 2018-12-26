import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {IndexPanelComponent} from './index-panel/index-panel.component';
import {IpcComponent} from './pages/ipc/ipc.component';
import {RoleGuardService} from '../../security/role-guard.service';
import {RoleType} from '../../core/enums/role.type';
import {ContactComponent} from './pages/contact/contact.component';
import {SummaryComponent} from './pages/summary/summary.component';



const PanelRoutes: Routes = [
  {
    path: '',
    component: IndexPanelComponent,  children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      {
        path: 'ipc',
        canActivate: [RoleGuardService],
        data: {roles: [RoleType.ADMIN, RoleType.SALES]},
        component: IpcComponent
      },
      {
        path: 'contact',
        canActivate: [RoleGuardService],
        data: {roles: [RoleType.ADMIN]},
        component: ContactComponent
      },
      {
        path: 'summary',
        canActivate: [RoleGuardService],
        data: {roles: [RoleType.ADMIN]},
        component: SummaryComponent
      }
    ]},
];


@NgModule({
  imports: [RouterModule.forChild(PanelRoutes)],
  exports: [RouterModule]
})
export class DashboardsRoutesModule {}
