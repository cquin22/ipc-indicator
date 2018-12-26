import {Component, OnInit} from '@angular/core';
import {TOP_MENU} from '../../../core/constants/top-menu';
import {AuthenticationRepositoryService} from '../../../security/authentication-repository.service';
import {RoleType} from '../../../core/enums/role.type';
import {ADMIN_LEFT_MENU, SALES_LEFT_MENU} from '../../../core/constants/left-menu';


@Component({
  selector: 'app-index-panel',
  templateUrl: './index-panel.component.html',
  styleUrls: ['./index-panel.component.css']
})
export class IndexPanelComponent implements OnInit {

  public leftMenu;
  public topMenu = TOP_MENU;

  constructor(
    private authenticationRepositoryService: AuthenticationRepositoryService
  ) { }

  ngOnInit() {
    this.authenticationRepositoryService.getUser().subscribe( user => {
      if (user) {
        switch (user.role) {
          case RoleType.ADMIN:
            this.leftMenu = ADMIN_LEFT_MENU;
            break;
          case RoleType.SALES:
            this.leftMenu = SALES_LEFT_MENU;
            break;
        }
      }
    })
  }

}
