import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { CrApiService } from './cr-api.service';
import { PlayerComponent } from './player/player.component';
import { BattlesComponent } from './battles/battles.component';
import { DeckComponent } from './deck/deck.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'player', component: PlayerComponent },
  { path: 'battles',      component: BattlesComponent },
  { path: '', redirectTo: '/player', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    BattlesComponent,
    DeckComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    )
  ],
  providers: [
    CrApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
