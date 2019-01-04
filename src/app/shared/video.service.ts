import { Injectable } from '@angular/core';
import { Video } from './../base/models/video';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class VideoService {

  private _getUrl = '/api/videos';
  private _postUrl = '/api/video';
  private _putUrl = '/api/video/';
  private _deleteUrl = '/api/video/';

  constructor(private _http: HttpClient) { }

  getVideos() {
    return this._http.get(this._getUrl)
      .map((response: Response) => response.json());
  }

  addVideo(video: Video) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let options = { headers: headers };
    return this._http.post(this._postUrl, JSON.stringify(video), options)
      .map((response: Response) => response.json());
  }

  updateVideo(video: Video) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let options = { headers: headers };
    return this._http.put(this._putUrl + video._id, JSON.stringify(video), options)
      .map((response: Response) => response.json());
  }

  deleteVideo(video: Video) {
    return this._http.delete(this._deleteUrl + video._id)
      .map((response: Response) => response.json());
  }

}
