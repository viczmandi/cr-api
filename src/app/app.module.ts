import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';

import { CrApiService } from './cr-api.service';
import { PlayerComponent } from './player/player.component';
import { BattlesComponent } from './battles/battles.component';
import { DeckComponent } from './deck/deck.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SearchComponent } from './search/search.component';
import { VisitorGuard } from './visitor-guard';
import { DominantComponent } from './dominant/dominant.component';

const appRoutes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'player', component: PlayerComponent, canActivate: [VisitorGuard] },
  { path: 'battles', component: BattlesComponent, canActivate: [VisitorGuard]  },
  { path: 'dominant', component: DominantComponent, canActivate: [VisitorGuard]  },
  { path: '', redirectTo: '/search', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    BattlesComponent,
    DeckComponent,
    PageNotFoundComponent,
    SearchComponent,
    DominantComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    ),
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [
    CrApiService,
    VisitorGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
