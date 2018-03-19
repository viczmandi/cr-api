import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from "@angular/router";
import { CrApiService } from '../cr-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: any) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
          "search": form.search
      }
    };
    this.router.navigate(["player"], navigationExtras);
  }

}
