export class Fleet {
  constructor(public ships: Ship[] = [], public squadrons: Squadron[] = []) {
  }
}

export class ArmadaThing {
  constructor(public name: string, public points: number, public faction: Faction = null, public unique: boolean = false) {
  }
}

export class Ship extends ArmadaThing {
  constructor(name: string, points: number, faction: Faction = null, unique: boolean = false, public possibleUpgrades: Upgrade[] = []) {
    super(name, points, faction, unique);
  }
}

export class Upgrade {
  constructor(public upgradeType: UpgradeType, public upgradeItem: UpgradeItem = null) {
  }
}

export class UpgradeItem extends ArmadaThing {
  constructor(name: string, points: number, faction: Faction = null, unique: boolean = false, public upgradeType: UpgradeType) {
    super(name, points, faction, unique);
  }
}

export class Squadron extends ArmadaThing {
  constructor(name: string, points: number, faction: Faction, unique: boolean = false) {
    super(name, points, faction, unique);
  }
}

export enum Faction {
  imperial, rebel
}

export enum UpgradeType {
  commander, officer
}
