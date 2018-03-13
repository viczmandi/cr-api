import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
})
export class DeckComponent implements OnInit {

  @Input() team: Object;
  @Input() opponent: Object;
  show: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  showDecks(): void {
    this.show = !this.show;
  }

}
