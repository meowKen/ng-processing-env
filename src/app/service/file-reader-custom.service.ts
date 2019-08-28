import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';

@Injectable()
export class FileReaderCustomService {

  private _apiEndPoint = 'http://127.0.0.1:8080';
  private _blobType = new HttpHeaders()
    .set('responseType', 'blob');

  constructor(private http: HttpClient) { }

  get(name: string) {
    return this.http.get([this._apiEndPoint, name].join('/'));
  }
}
