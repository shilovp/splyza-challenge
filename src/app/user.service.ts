import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BACKEND_URL } from './environments/prod';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private _http: HttpClient) { }

  getCurrentUser() {
    return this._http.get(BACKEND_URL + '/users/self', {headers: {"Access-Control-Allow-Origin": "*"}});
  }
}
