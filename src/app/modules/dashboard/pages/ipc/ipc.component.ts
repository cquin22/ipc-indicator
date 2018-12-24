import { Component, OnInit } from '@angular/core';
import {IChart} from '../../../../core/interfaces/i-chart';
import {DatePipe} from '@angular/common';
let self;

@Component({
  selector: 'app-ipc',
  templateUrl: './ipc.component.html',
  styleUrls: ['./ipc.component.css']
})
export class IpcComponent implements OnInit {

  public ipcList: IChart;

  constructor(
    private datePipe: DatePipe
  ) {
    self = this;
  }

  ngOnInit() {
    this.ipcList = {
      view: undefined,
      results:   [
        {
          'name': 'Caceritos',
          'series': [
            {
              'value': 1469,
              'name': '2016-09-16T04:14:37.171Z'
            },
            {
              'value': 3368,
              'name': '2016-09-21T09:27:31.185Z'
            },
            {
              'value': 3925,
              'name': '2016-09-24T01:05:45.092Z'
            },
            {
              'value': 4239,
              'name': '2016-09-18T07:41:06.865Z'
            },
            {
              'value': 7947,
              'name': '2016-09-18T03:20:58.467Z'
            },
            {
              'value': 89947,
              'name': '2016-10-18T03:20:58.467Z'
            },
            {
              'value': 17947,
              'name': '2016-10-23T03:20:58.467Z'
            },
            {
              'value': 26947,
              'name': '2016-10-27T03:20:58.467Z'
            },
            {
              'value': 31947,
              'name': '2016-10-28T03:20:58.467Z'
            },
            {
              'value': 0,
              'name': '2016-11-06T03:20:58.467Z'
            },
            {
              'value': 0,
              'name': '2016-11-07T03:20:58.467Z'
            }
          ]
        },
      ],
      scheme: {domain: ['#00838f', '#A10A28', '#C7B42C', '#AAAAAA']},
      xAxis: true,
      yAxis: true,
      legend: true,
      showXAxisLabel: false,
      showYAxisLabel: true,
      gradient: false,
      autoScale: true,
      xAxisLabel: 'x label',
      yAxisLabel: 'y label',
    };
  }

  public formatDate(data) {
    return self.datePipe.transform(data);
  }

}
