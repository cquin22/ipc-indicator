import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {AuthenticationRepositoryService} from './authentication-repository.service';
import {IUser} from '../interfaces/i-user';
import {environment as ENV } from '../../../environments/environment';
import {ISuccessAuthenticate} from '../interfaces/i-success-authenticate';
const CONTEXT_URL = '/users';

@Injectable()
export class AuthenticationService {
  constructor(
    private http: HttpClient,
    private authRepo: AuthenticationRepositoryService,
  ) {}

  public getMe(): Observable<IUser> {
    return this.http.get<IUser>(ENV.api + '/users')
      .pipe(
        tap((response: IUser) => {
          console.log(response);
        })
      );
  }
  public login(user: IUser): Observable<ISuccessAuthenticate> {
    return this.http.post<ISuccessAuthenticate>(ENV.api + CONTEXT_URL + '/login', user)
      .pipe(
        tap((response: ISuccessAuthenticate) => this.authRepo.registerStorageUser(response))
      );
  }



}
