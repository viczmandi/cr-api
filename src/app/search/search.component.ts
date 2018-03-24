import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, NavigationExtras } from "@angular/router";
import { CrApiService } from '../cr-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private router: Router, private crApiService: CrApiService) { }

  ngOnInit() { 
    document.body.classList.add('bg-img');
  }

  onSubmit(form: any) {
    this.crApiService.getPlayerData(form.search).subscribe(() => {
      this.router.navigate(["player"]);
    });
  }
}
