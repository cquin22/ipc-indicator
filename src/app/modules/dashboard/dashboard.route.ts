import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {IndexPanelComponent} from './index-panel/index-panel.component';
import {IpcComponent} from './pages/ipc/ipc.component';



const PanelRoutes: Routes = [
  {
    path: '',
    component: IndexPanelComponent,  children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      {
        path: 'ipc',
        component: IpcComponent
      }
    ]},
];


@NgModule({
  imports: [RouterModule.forChild(PanelRoutes)],
  exports: [RouterModule]
})
export class DashboardsRoutesModule {}
