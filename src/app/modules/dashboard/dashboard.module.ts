import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import { IpcComponent } from './pages/ipc/ipc.component';
import {DashboardsRoutesModule} from './dashboard.route';
import {IndexPanelComponent} from './index-panel/index-panel.component';
import {TranslateModule} from '@ngx-translate/core';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';
import { TopNavigatorComponent } from './components/top-navigator/top-navigator.component';
import {ChartSeriesTooltipTemplateComponent} from './components/chart-series-tooltip-template/chart-series-tooltip-template.component';
import {ChartTooltipTemplateComponent} from './components/chart-tooltip-template/chart-tooltip-template.component';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {IpcService} from '../../core/services/ipc-service';
import { ContactComponent } from './pages/contact/contact.component';
import { SummaryComponent } from './pages/summary/summary.component';

// @ts-ignore
@NgModule({
  imports: [
    CommonModule,
    NgxChartsModule,
    DashboardsRoutesModule,
    TranslateModule.forChild(),
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    DatePipe,
    IpcService
  ],
  declarations: [
    IndexPanelComponent,
    IpcComponent,
    LeftMenuComponent,
    TopNavigatorComponent,
    ChartSeriesTooltipTemplateComponent,
    ChartTooltipTemplateComponent,
    ContactComponent,
    SummaryComponent]
})
export class DashboardModule { }
