import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthenticationRepositoryService} from './authentication-repository.service';
import {IUser} from '../core/interfaces/i-user';
import {ToastrManager} from 'ng6-toastr-notifications';


@Injectable()
export class RoleGuardService implements CanActivate {

  private user: IUser;

  constructor(
    private router: Router,
    private authenticationRepositoryService: AuthenticationRepositoryService,
    public toastr: ToastrManager
  ) {
    this.authenticationRepositoryService.getUser().subscribe( user => {
      this.user = user;
    });
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return this.checkRole(route, state);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return this.canActivate(route, state);
  }

  private checkRole(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return new Promise((resolve, reject) => {
        if (this.user  && route.data) {
          const match = this.authenticationRepositoryService.roleMatch(route.data['roles'], this.user);
          if (match) {
            resolve(true);
          } else {
            this.toastr.warningToastr('This module is not allowed with the role of your user', 'Section not allowed');
            this.router.navigate(['/authenticate/login']);
            resolve(false);
          }
        }
    });
  }
}
