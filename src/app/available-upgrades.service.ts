import {Injectable} from '@angular/core';
import {Faction, UpgradeItem, UpgradeType} from './models';
import {FactionFilter, UpgradeTypeFilter} from './filters';

@Injectable()
export class AvailableUpgradesService {

  constructor(private upgradeItems: UpgradeItem[] = []) {
  }

  public search(upgradeType: UpgradeType = null, faction: Faction = null): UpgradeItem[] {
    const upgradeTypeFilter = new UpgradeTypeFilter(upgradeType);
    const factionFilter = new FactionFilter(faction);

    return this.upgradeItems.filter(upgradeItem => factionFilter.filter(upgradeItem) && upgradeTypeFilter.filter(upgradeItem));
  }
}
