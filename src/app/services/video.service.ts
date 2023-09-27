import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BACKEND_URL } from '../environments/prod';
import { Video } from '../interfaces/video';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private _http: HttpClient) { }

  getVideoList(): Observable<Video[]> {
    return this._http.get<Video[]>(BACKEND_URL + '/videos', {headers: {"Access-Control-Allow-Origin": "*"}});
  }
  getVideoDetails() {}
}
