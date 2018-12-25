import { Component, OnInit } from '@angular/core';
import {IChart} from '../../../../core/interfaces/i-chart';
import {DatePipe} from '@angular/common';
import {IpcService} from '../../../../core/services/ipc-service';
let self;

@Component({
  selector: 'app-ipc',
  templateUrl: './ipc.component.html',
  styleUrls: ['./ipc.component.css']
})
export class IpcComponent implements OnInit {

  public ipcList: IChart;

  constructor(
    private datePipe: DatePipe,
    private ipcService: IpcService
  ) {
    self = this;
  }

  ngOnInit() {
    this.ipcService.getGraph().subscribe( data => {
      this.ipcList = {
        view: undefined,
        results: data,
        scheme: {domain: ['#00838f', '#A10A28', '#C7B42C', '#AAAAAA']},
        xAxis: true,
        yAxis: true,
        legend: true,
        showXAxisLabel: false,
        showYAxisLabel: true,
        gradient: false,
        autoScale: true,
        xAxisLabel: 'x label',
        yAxisLabel: 'Precios',
      };
    });

  }

  public formatDate(data) {
    return self.datePipe.transform(data);
  }

}
