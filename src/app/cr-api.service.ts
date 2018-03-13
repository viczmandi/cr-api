import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/timeoutWith';
// import 'rxjs/add/observable/throw';
// import { catchError, map, tap } from 'rxjs/operators';
// import { of } from 'rxjs/Observable/of';

const httpOptions = {
  headers: new HttpHeaders(
    { 'auth':'cc63e2bbbc0a4a34953c9dbb9d0cbaf0bb874b0d4a6d4d38a4a8547888204314' }
  )
};

@Injectable()
export class CrApiService {

  private crApiUrl = 'http://api.cr-api.com';
  private player = '/player';
  private tag = '/98PURRRVV';
  private battles = '/battles';
  

  constructor(private http: HttpClient) { }

  getPlayer(): Observable<Object> {
    return this.http.get<Object>(`${this.crApiUrl}${this.player}${this.tag}`, httpOptions);
  }

  getBattles() {
    return this.http.get(`${this.crApiUrl}${this.player}${this.tag}${this.battles}`, httpOptions);
  }
}
