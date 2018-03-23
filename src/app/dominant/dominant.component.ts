import { Component, OnInit } from '@angular/core';
import * as _ from "lodash";

@Component({
  selector: 'app-dominant',
  templateUrl: './dominant.component.html',
  styleUrls: ['./dominant.component.css']
})
export class DominantComponent implements OnInit {

  data: Array<Object>;
  cardDecks: Array<Object>;
  filteredCards: Array<Object>;
  countedCards: Array<Object>;

  constructor() {
    this.cardDecks = [];
    this.filteredCards = [];
    this.countedCards = [];
   }

  ngOnInit() {
    this.data = JSON.parse(localStorage.getItem('playerData'))['battles'];
    this.filterDecks();
    this.filterCards();
    this.countCards();
    this.log();
  }

  filterDecks() {
    this.data.forEach(element => {
      if(element['opponent'][0]['trophyChange'] > 0) {
        this.cardDecks.push(element['opponent'][0]['deck']);
      }
    });
  }

  filterCards() {
    this.cardDecks.forEach(element => {
      for (const key in element) {
        if (element.hasOwnProperty(key)) {
          const elm = element[key];
          this.filteredCards.push({icon: elm['icon'], counter: 1});
        }
      }
    });
  }

  countCards() {
    this.filteredCards.forEach(element => {
      let obj = _.find(this.countedCards, function (obj) { 
        return obj['icon'] == element['icon']; 
      })
      if(obj) {
        _.set(obj, 'counter', obj['counter']+=1);
      } else {
        this.countedCards.push(element);
      }
    });
    this.countedCards = _.orderBy(this.countedCards, ['counter'], 'desc');
  }

  log() {
    this.countedCards.forEach(element => {
      console.log(element);
    });
  }

}
