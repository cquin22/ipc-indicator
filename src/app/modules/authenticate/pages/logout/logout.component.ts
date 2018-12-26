import { Component, OnInit } from '@angular/core';
import {AuthenticationRepositoryService} from '../../../../security/authentication-repository.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private authenticatedRepositoryService: AuthenticationRepositoryService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authenticatedRepositoryService.logOut();
    this.router.navigate(['/authenticate/login']);
  }

}
