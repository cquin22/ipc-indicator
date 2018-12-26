import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AuthenticationRepositoryService} from './authentication-repository.service';
import {ToastrManager} from 'ng6-toastr-notifications';




@Injectable()
export class RequestHttpInterceptor implements HttpInterceptor {

  public token: string;

  constructor(
    private modalService: NgbModal,
    private authenticationRepository: AuthenticationRepositoryService,
    public toastr: ToastrManager
  ) {
    this.authenticationRepository.getToken().subscribe(this.setTokenIfAny.bind(this));
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.authenticationRepository.verifyIsLoggedIn()) {
      req = req.clone({headers: req.headers.set('Authorization', `${this.token}`)});
    }
    return next.handle(req)
      .pipe(
        tap(event => {
          if (event instanceof HttpResponse) {
            if (event.ok && !(event.url.indexOf('.json') > -1)) {
              // stop our loader here
            }
          }
        }, error => {
          // http response status code
          console.log(error);
          this.toastr.errorToastr(error.error.message, 'Oops!');
        })
      );

  }

  private setTokenIfAny(token) {
    if (token) {
      this.token = token;
    }
  }
}
