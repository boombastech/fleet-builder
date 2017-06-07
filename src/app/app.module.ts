import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AvailableShipsService} from './available-ships.service';
import {AvailableUpgradesService} from './available-upgrades.service';
import {RouterModule, Routes} from '@angular/router';
import {FleetService} from './fleet.service';

const appRoutes: Routes = [
  // {
  //   path: 'fleet/create',
  //   component: FactionSelectorComponent,
  //   data: {title: 'Armada'}
  // },
  // {
  //   path: 'fleet/view/:id',
  //   component: FleetBuilderComponent,
  //   data: {title: 'Armada'}
  // },
  // {
  //   path: 'fleet/edit/:id',
  //   redirectTo: 'factions',
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'fleet/search',
  //   component: FactionSelectorComponent,
  //   data: {title: 'Armada'}
  // }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AvailableShipsService,
    AvailableUpgradesService,
    FleetService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
