import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, NavigationExtras } from "@angular/router";
import { CrApiService } from '../cr-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  loading:boolean = false;

  constructor(private router: Router, private crApiService: CrApiService) { }

  ngOnInit() { }

  onSubmit(form: any) {
    this.loading = true;
    this.crApiService.getPlayerData(form.search).subscribe(() => {
      this.router.navigate(["dominant"]);
    });
  }
}
