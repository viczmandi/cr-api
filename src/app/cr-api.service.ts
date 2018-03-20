import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { pipe } from 'rxjs/util/pipe';
import { tap } from 'rxjs/operators/tap';

const httpOptions = {
  headers: new HttpHeaders(
    { 'auth':'cc63e2bbbc0a4a34953c9dbb9d0cbaf0bb874b0d4a6d4d38a4a8547888204314' }
  )
};

@Injectable()
export class CrApiService {

  private API_URL = 'http://api.cr-api.com/player';
  
  constructor(private http: HttpClient) { }

  getPlayerData(playerTag: string) {
    console.log("Player data fetching started in service");
    // return this.http.get(`${this.API_URL}/${playerTag}`, httpOptions).subscribe(
    //   playerData => localStorage.setItem('playerData', JSON.stringify(playerData)),
    //   err => console.error(err),
    //   () => console.log(`done loading player's data`));

    // return this.http.get(`${this.API_URL}/${playerTag}`, httpOptions)
    //   .toPromise()
    //   .then(playerData => localStorage.setItem('playerData', JSON.stringify(playerData)));

    return this.http.get(`${this.API_URL}/${playerTag}`, httpOptions)
      .pipe(
        tap(playerData => localStorage.setItem('playerData', JSON.stringify(playerData)))
      );
  }
}
