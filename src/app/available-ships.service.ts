import {Injectable} from '@angular/core';
import {Faction, Ship} from './models';
import {FactionFilter} from './filters';

@Injectable()
export class AvailableShipsService {

  constructor(private ships: Ship[] = []) {
  }

  public search(faction: Faction = null): Ship[] {
    const factionFilter: FactionFilter = new FactionFilter(faction);

    return this.ships.filter(ship => factionFilter.filter(ship));
  }
}
