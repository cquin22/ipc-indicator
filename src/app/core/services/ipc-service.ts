import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment as ENV } from '../../../environments/environment';
const CONTEXT_URL = '/ipc';

@Injectable()
export class IpcService {

  constructor(
    private http: HttpClient
  ) {}

  public getGraph(): Observable<any> {
    return this.http.get(ENV.api + CONTEXT_URL);
  }

}
