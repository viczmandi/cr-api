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

const appRoutes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'player', component: PlayerComponent, canActivate: [VisitorGuard] },
  { path: 'battles', component: BattlesComponent },
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
    SearchComponent
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
