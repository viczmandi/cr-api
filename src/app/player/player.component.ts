import { Component, OnInit } from '@angular/core';
import { CrApiService } from '../cr-api.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  player: any;

  constructor(private crApiService: CrApiService) { }

  ngOnInit() {
    this.getPlayer();
  }

  getPlayer() {
    this.crApiService.getPlayer().subscribe(
      player => this.player = player,
      err => console.error(err),
      () => console.log('done loading player'));
  }
}
