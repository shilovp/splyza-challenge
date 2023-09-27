import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BACKEND_URL } from '../environments/prod';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private _http: HttpClient) { }

  getCurrentUser(): Observable<User> {
    return this._http.get<User>(BACKEND_URL + '/users/self', {headers: {"Access-Control-Allow-Origin": "*"}});
  }
}
