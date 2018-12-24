import { Component, OnInit, Input } from '@angular/core';
import {IChartTooltip} from '../../../../core/interfaces/i-chart-tooltip';


@Component({
  selector: 'app-chart-tooltip-template',
  templateUrl: './chart-tooltip-template.component.html',
  styleUrls: ['./chart-tooltip-template.component.scss']
})
export class ChartTooltipTemplateComponent implements OnInit {

  @Input() data: IChartTooltip;

  constructor() { }

  ngOnInit() {
  }

}
