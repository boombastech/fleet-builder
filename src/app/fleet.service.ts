import {Injectable} from '@angular/core';
import {Faction, Fleet} from './models';

@Injectable()
export class FleetService {

  private fleets: Fleet[] = [];

  constructor() {
    setTimeout(() => this.fleets.push(new Fleet(Date.now(), Faction.imperial, 'Saved Fleet 1', [], [])), 2000);
    setTimeout(() => this.fleets.push(new Fleet(Date.now(), Faction.imperial, 'Saved Fleet 2', [], [])), 2000);
    setTimeout(() => this.fleets.push(new Fleet(Date.now(), Faction.rebel, 'Saved Fleet 3', [], [])), 2000);
    setTimeout(() => this.fleets.push(new Fleet(Date.now(), Faction.rebel, 'Saved Fleet 4', [], [])), 2000);
  }

  public newFleet(faction: Faction): Fleet {
    return new Fleet(Date.now(), faction);
  }

  public loadFleet(id: number): Fleet {
    const fleets = this.fleets.filter(fleet => fleet.id === id);
    if (fleets.length > 0) {
      return fleets[0];
    } else {
      return null;
    }
  }

  public getFleets(faction: Faction = null): Fleet[] {
    return this.fleets.filter(fleet => {
      if (faction === null) {
        return true;
      }
      return fleet.faction === faction;
    });
  }

  public saveFleet(fleetToSave: Fleet) {
    this.deleteFleet(fleetToSave);
    this.fleets.push(fleetToSave);
  }

  public deleteFleet(fleetToDelete: Fleet) {
    const fleets = this.fleets.filter(fleet => fleet.id === fleet.id);
    if (fleets.length > 0) {
      const index: number = this.fleets.indexOf(fleetToDelete);
      if (index > -1) {
        this.fleets.splice(index, 1);
      }
    }
  }
}
