import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, NavigationExtras } from "@angular/router";
import { CrApiService } from '../cr-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  // @HostBinding('attr.class') cssClass = 'tab-pane fade show';

  constructor(private router: Router) { }

  ngOnInit() { }

  onSubmit(form: any) {
    localStorage.setItem('playerTag', form.search);
    this.router.navigate(["player"]);
  }

}
