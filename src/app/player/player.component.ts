import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { CrApiService } from '../cr-api.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  player: Object;
  search: string;

  constructor(
    private crApiService: CrApiService,
    private route: ActivatedRoute
  ) { 
    this.route.queryParams.subscribe(params => {
      this.search = params["search"];
  });
  }

  ngOnInit() {
    this.getPlayer();    
  }

  getPlayer() {
    this.crApiService.getPlayer(this.search).subscribe(
      player => this.player = player,
      err => console.error(err),
      () => console.log('done loading player'));
  }
}
