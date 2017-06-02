import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AvailableShipsService} from './available-ships.service';
import {AvailableUpgradesService} from './available-upgrades.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    AvailableShipsService,
    AvailableUpgradesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
