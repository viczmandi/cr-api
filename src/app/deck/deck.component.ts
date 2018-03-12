import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
})
export class DeckComponent implements OnInit {

  @Input() team: any;
  @Input() opponent: any;
  show: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  showDecks(): void {
    this.show = !this.show;
  }

}
