import {Component, Input, OnInit} from '@angular/core';
import {IMenu} from '../../../../core/interfaces/i-menu';
import {AuthenticationRepositoryService} from '../../../../security/authentication-repository.service';
import {IUser} from '../../../../core/interfaces/i-user';

@Component({
  selector: 'app-top-navigator',
  templateUrl: './top-navigator.component.html',
  styleUrls: ['./top-navigator.component.scss']
})
export class TopNavigatorComponent implements OnInit {

  @Input() dataMenu: IMenu;

  public selectedIndex: any;
  public isOpenSubMenu: boolean;
  public user: IUser;

  constructor(
    private authenticationRepositoryService: AuthenticationRepositoryService
  ) { }

  ngOnInit() {
    this.authenticationRepositoryService.getUser().subscribe(user => {
      this.user = user;
    });
  }

}
