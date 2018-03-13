import { Component, OnInit } from '@angular/core';
import { CrApiService } from '../cr-api.service';

@Component({
  selector: 'app-battles',
  templateUrl: './battles.component.html',
  styleUrls: ['./battles.component.css']
})
export class BattlesComponent implements OnInit {

  battles: Object;

  constructor(private crApiService: CrApiService) { }

  ngOnInit() {
    this.getBattles();
  }

  getBattles() {
    this.crApiService.getBattles().subscribe(
      battles => this.battles = battles,
      err => console.error(err),
      () => console.log('done loading battles'));
  }
}
