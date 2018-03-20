import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  player: Object;

  constructor() { }

  ngOnInit() {
    this.getPlayer();    
  }

  getPlayer() {
    this.player = JSON.parse(localStorage.getItem('playerData'));
  }
}
