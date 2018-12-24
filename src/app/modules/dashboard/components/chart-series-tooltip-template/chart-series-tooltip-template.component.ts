import { Component, OnInit, Input } from '@angular/core';
import {IChartTooltip} from '../../../../core/interfaces/i-chart-tooltip';


@Component({
  selector: 'app-chart-series-tooltip-template',
  templateUrl: './chart-series-tooltip-template.component.html',
  styleUrls: ['./chart-series-tooltip-template.component.scss']
})
export class ChartSeriesTooltipTemplateComponent implements OnInit {

  @Input() data: Array<IChartTooltip>;

  constructor() { }

  ngOnInit() {
  }

}
