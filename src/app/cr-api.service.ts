import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders(
    { 'auth':'cc63e2bbbc0a4a34953c9dbb9d0cbaf0bb874b0d4a6d4d38a4a8547888204314' }
  )
};

@Injectable()
export class CrApiService {

  private API_URL = 'http://api.cr-api.com/player';
  
  constructor(private http: HttpClient) { }

  getPlayer(playerTag: string) {
    if(!playerTag) {
      playerTag = localStorage.getItem('playerTag');
    }
    return this.http.get(`${this.API_URL}/${playerTag}`, httpOptions);
  }
}
