import { Component, OnInit } from '@angular/core';
import { CrApiService } from '../cr-api.service';

@Component({
  selector: 'app-battles',
  templateUrl: './battles.component.html',
  styleUrls: ['./battles.component.css']
})
export class BattlesComponent implements OnInit {

  battles: Array<Object>;

  constructor(private crApiService: CrApiService) { }

  ngOnInit() {
    this.getBattles();
  }

  getBattles() {
    this.battles = JSON.parse(sessionStorage.getItem('playerData'))['battles'];
  }
}
