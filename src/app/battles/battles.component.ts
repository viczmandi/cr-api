import { Component, OnInit } from '@angular/core';
import { CrApiService } from '../cr-api.service';

@Component({
  selector: 'app-battles',
  templateUrl: './battles.component.html',
  styleUrls: ['./battles.component.css']
})
export class BattlesComponent implements OnInit {

  playerTag: string;
  battles: Object;

  constructor(private crApiService: CrApiService) { }

  ngOnInit() {
    this.playerTag = localStorage.getItem('playerTag');
    this.getBattles();
  }

  getBattles() {
    this.crApiService.getPlayer(this.playerTag).subscribe(
      battles => this.battles = battles['battles'],
      err => console.error(err),
      () => console.log('done loading battles'));
  }
}
