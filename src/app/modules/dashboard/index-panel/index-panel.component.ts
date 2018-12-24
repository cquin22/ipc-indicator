import { Component, OnInit } from '@angular/core';
import {LEFT_MENU} from '../../../core/constants/left-menu';
import {TOP_MENU} from '../../../core/constants/top-menu';


@Component({
  selector: 'app-index-panel',
  templateUrl: './index-panel.component.html',
  styleUrls: ['./index-panel.component.css']
})
export class IndexPanelComponent implements OnInit {

  public leftMenu = LEFT_MENU;
  public topMenu = TOP_MENU;

  constructor() { }

  ngOnInit() {
  }

}
