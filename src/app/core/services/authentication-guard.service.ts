import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from '@angular/router';
import {AuthenticationRepositoryService} from './authentication-repository.service';
import {AuthenticationService} from './authentication.service';


@Injectable()
export class AuthenticationGuardService implements CanActivate, CanActivateChild {

  constructor(
    private router: Router,
    private authenticationRepositoryService: AuthenticationRepositoryService,
    private authenticatedService: AuthenticationService
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return this.checkLogin(route, state);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return this.canActivate(route, state);
  }

  checkLogin(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (this.authenticationRepositoryService.verifyIsLoggedIn()) {
        this.authenticatedService.getMe().subscribe(() => {
          resolve(true);
        }, error => {
          this.router.navigate(['/authenticate/login'], {
              queryParams: {
                return: state.url
              }
            }
            );
          resolve(false);
        });
      } else {
        this.router.navigate(['/authenticate/login'], {
            queryParams: {
              return: state.url
            }
          }
        );
        resolve(false);
      }
    });
  }
}
