import {Faction, Ship, Upgrade, UpgradeType} from './models';
export class TestShipData {

  public static allShips(): Ship[] {
    const allShips: Ship[] = [];

    this.imperialShips().forEach(ship => allShips.push(ship));
    this.rebelShips().forEach(ship => allShips.push(ship));

    return allShips;
  }

  public static imperialShips(): Ship[] {
    return [
      this.gladiatorI(),
      this.gladiatorII(),
      this.isdI(),
      this.isdII()
    ];
  }

  public static rebelShips(): Ship[] {
    return [
      this.mc30cScout(),
      this.mc30cTorpedo()
    ];
  }

  public static gladiatorI(): Ship {
    return new Ship('Gladiator I-Class Star Destroyer',
      56,
      Faction.imperial,
      false,
      [
        new Upgrade(UpgradeType.commander),
        new Upgrade(UpgradeType.officer),
        new Upgrade(UpgradeType.weaponsTeam),
        new Upgrade(UpgradeType.supportTeam),
        new Upgrade(UpgradeType.ordinance),
        new Upgrade(UpgradeType.title),
      ]);
  }

  public static gladiatorII(): Ship {
    return new Ship('Gladiator I-Class Star Destroyer',
      62,
      Faction.imperial,
      false,
      [
        new Upgrade(UpgradeType.commander),
        new Upgrade(UpgradeType.officer),
        new Upgrade(UpgradeType.weaponsTeam),
        new Upgrade(UpgradeType.supportTeam),
        new Upgrade(UpgradeType.ordinance),
        new Upgrade(UpgradeType.title),
      ]);
  }

  public static isdI(): Ship {
    return new Ship('Imperial I-Class Star Destroyer',
      110,
      Faction.imperial,
      false,
      [
        new Upgrade(UpgradeType.commander),
        new Upgrade(UpgradeType.officer),
        new Upgrade(UpgradeType.weaponsTeam),
        new Upgrade(UpgradeType.offensiveRetrofit),
        new Upgrade(UpgradeType.offensiveRetrofit),
        new Upgrade(UpgradeType.ionCannons),
        new Upgrade(UpgradeType.turbolasers),
        new Upgrade(UpgradeType.title),
      ]);
  }

  public static isdII(): Ship {
    return new Ship('Imperial II-Class Star Destroyer',
      120,
      Faction.imperial,
      false,
      [
        new Upgrade(UpgradeType.commander),
        new Upgrade(UpgradeType.officer),
        new Upgrade(UpgradeType.weaponsTeam),
        new Upgrade(UpgradeType.offensiveRetrofit),
        new Upgrade(UpgradeType.defensiveRetrofit),
        new Upgrade(UpgradeType.ionCannons),
        new Upgrade(UpgradeType.turbolasers),
        new Upgrade(UpgradeType.title),
      ]);
  }

  public static mc30cScout(): Ship {
    return new Ship('MC30c Scout Frigate',
      69,
      Faction.rebel,
      false,
      [
        new Upgrade(UpgradeType.commander),
        new Upgrade(UpgradeType.officer),
        new Upgrade(UpgradeType.weaponsTeam),
        new Upgrade(UpgradeType.defensiveRetrofit),
        new Upgrade(UpgradeType.ordinance),
        new Upgrade(UpgradeType.turbolasers),
        new Upgrade(UpgradeType.title),
      ]);
  }

  public static mc30cTorpedo(): Ship {
    return new Ship('MC30c Torpedo Frigate',
      63,
      Faction.rebel,
      false,
      [
        new Upgrade(UpgradeType.commander),
        new Upgrade(UpgradeType.officer),
        new Upgrade(UpgradeType.weaponsTeam),
        new Upgrade(UpgradeType.defensiveRetrofit),
        new Upgrade(UpgradeType.ordinance),
        new Upgrade(UpgradeType.turbolasers),
        new Upgrade(UpgradeType.title),
      ]);
  }
}
