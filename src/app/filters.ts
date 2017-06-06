import {ArmadaObject, Faction, UpgradeItem, UpgradeType} from './models';

interface Filter<T extends ArmadaObject> {
  filter(options: T): boolean;
}


export class FactionFilter implements Filter<ArmadaObject> {
  constructor(private faction: Faction = null) {
  }

  public filter(option: ArmadaObject): boolean {
    if (this.faction == null) {
      return true;
    }
    return option.faction === this.faction;
  }
}


export class UpgradeTypeFilter implements Filter<UpgradeItem> {
  constructor(private upgradeType: UpgradeType = null) {
  }

  public filter(option: UpgradeItem): boolean {
    if (this.upgradeType == null) {
      return true;
    }
    return option.upgradeType === this.upgradeType;
  }
}
