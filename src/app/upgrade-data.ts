import {Faction, UpgradeItem, UpgradeType} from './models';
export class TestUpgradeData {

  public static allUpgrades(): UpgradeItem[] {
    const allShips: UpgradeItem[] = [];

    this.commanders().forEach(ship => allShips.push(ship));
    this.officers().forEach(ship => allShips.push(ship));

    return allShips;
  }

  public static commanders(): UpgradeItem[] {
    return [
      this.generalDodonna(),
      this.admiralMotti()
    ]
  }

  public static officers(): UpgradeItem[] {
    return [
      this.skilledFirstOfficer(),
      this.ahsokaTano(),
      this.ministerTua()
    ]
  }

  public static generalDodonna(): UpgradeItem {
    return new UpgradeItem(
      'General Dodonna',
      20,
      Faction.rebel,
      true,
      UpgradeType.commander
    )
  }

  public static admiralMotti(): UpgradeItem {
    return new UpgradeItem(
      'Admiral Motti',
      24,
      Faction.imperial,
      true,
      UpgradeType.commander
    )
  }

  public static skilledFirstOfficer(): UpgradeItem {
    return new UpgradeItem(
      'Skilled First Officer',
      1,
      null,
      false,
      UpgradeType.officer
    )
  }

  public static ministerTua(): UpgradeItem {
    return new UpgradeItem(
      'Minister Tua',
      2,
      Faction.imperial,
      true,
      UpgradeType.officer
    )
  }

  public static ahsokaTano(): UpgradeItem {
    return new UpgradeItem(
      'Ahsoka Tano',
      2,
      Faction.rebel,
      true,
      UpgradeType.officer
    )
  }
}
