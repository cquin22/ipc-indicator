import {Injectable} from '@angular/core';
import {CookieService} from 'ng2-cookies';
import {BehaviorSubject} from 'rxjs';
import {Observable} from 'rxjs';
import {IUser} from '../core/interfaces/i-user';
import {ISuccessAuthenticate} from '../core/interfaces/i-success-authenticate';
const SESSION = '_token';

@Injectable()
export class AuthenticationRepositoryService {
  private user$: BehaviorSubject<IUser> = new BehaviorSubject<IUser>(null);
  private token$: BehaviorSubject<string> = new BehaviorSubject<string>(this.cookieService.get(SESSION));

  constructor(
    private cookieService: CookieService,
  ) {

  }

  public registerStorageUser(successAuthenticate: ISuccessAuthenticate): void {
    this.cookieService.set(SESSION, successAuthenticate.token);
    this.setToken();
  }

  public logOut(): void {
    this.cookieService.delete(SESSION);
  }

  public verifyIsLoggedIn(): boolean {
    const cookieStorage = this.cookieService.get(SESSION);
    return !(!cookieStorage || cookieStorage === '');
  }

  public getToken(): Observable<string> {
    return this.token$.asObservable();
  }

  public setToken() {
    this.token$.next(this.cookieService.get(SESSION));
  }

  public setUser(user: IUser) {
    this.user$.next(user);
  }

  public getUser(): Observable<IUser> {
    return this.user$.asObservable();
  }


}
