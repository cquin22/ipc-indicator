import {Component, HostListener, Input, OnInit} from '@angular/core';
import {IMenu} from '../../../../core/interfaces/i-menu';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {

  @Input() listMenu: Array<IMenu>;

  public innerWidth: number;
  public showMenu: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.loadMenu(event.target.innerWidth);
  }

  ngOnInit() {
    this.loadMenu(window.innerWidth);
  }

  public toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  public loadMenu(eventWidth?) {
    this.innerWidth = eventWidth;
    this.showMenu = this.innerWidth > 991;
  }

}
