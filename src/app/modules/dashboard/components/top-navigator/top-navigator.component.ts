import {Component, Input, OnInit} from '@angular/core';
import {IMenu} from '../../../../core/interfaces/i-menu';

@Component({
  selector: 'app-top-navigator',
  templateUrl: './top-navigator.component.html',
  styleUrls: ['./top-navigator.component.scss']
})
export class TopNavigatorComponent implements OnInit {

  @Input() dataMenu: IMenu;

  public selectedIndex: any;
  public isOpenSubMenu: boolean;

  constructor() { }

  ngOnInit() {
  }

}
