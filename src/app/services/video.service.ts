import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BACKEND_URL } from '../environments/prod';
import { Video } from '../interfaces/video';
import { Observable } from 'rxjs';
import { Reaction } from '../interfaces/reaction';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private _http: HttpClient) { }

  getVideoList(): Observable<Video[]> {
    return this._http.get<Video[]>(BACKEND_URL + '/videos', { headers: { "Access-Control-Allow-Origin": "*" } });
  }
  getVideo(videoId: string | null): Observable<Video> {
    return this._http.get<Video>(BACKEND_URL + '/videos/' + videoId, { headers: { "Access-Control-Allow-Origin": "*" } });
  }
  getReactions(videoId: string | null): Observable<Array<Reaction>> {
    return this._http.get<Array<Reaction>>(BACKEND_URL + '/videos/' + videoId + '/reactions', { headers: { "Access-Control-Allow-Origin": "*" } });
  }

  sendReaction(reaction: Reaction) {
    return this._http.post(BACKEND_URL + '/videos/' + reaction.videoId + '/reactions', reaction, { headers: { "Access-Control-Allow-Origin": "*" } });
  }

  saveVideo(video: Video | null) {
    return this._http.patch(BACKEND_URL + '/videos/' + video?.id, video, { headers: { "Access-Control-Allow-Origin": "*" } });
  }
}
