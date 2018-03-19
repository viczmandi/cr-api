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
  private playerTag: string; // 880089QLU
  
  constructor(private http: HttpClient) { }

  getPlayer(playerTag: string) {
    this.setPlayerTag(playerTag);
    if(!this.playerTag) {
      this.playerTag = localStorage.getItem('playerTag');
    }
    return this.http.get(`${this.API_URL}/${this.playerTag}`, httpOptions);
  }

  setPlayerTag(playerTag: string) {
    console.log('setPlayerTag 1');
    if(!playerTag) {
      return;
    }
    console.log('setPlayerTag 2');
    localStorage.setItem('playerTag', playerTag);
    this.playerTag = playerTag;
  }
}
