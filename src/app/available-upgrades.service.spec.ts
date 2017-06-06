import {Faction, UpgradeItem, UpgradeType} from './models';
import {TestUpgradeData} from './upgrade-data';
import {AvailableUpgradesService} from './available-upgrades.service';

describe('AvailableUpgradesService', () => {
  let upgradeItems: UpgradeItem[];
  let availableUpgradesService: AvailableUpgradesService;

  beforeEach(() => {
    upgradeItems = TestUpgradeData.allUpgrades();

    availableUpgradesService = new AvailableUpgradesService(upgradeItems);
  });

  it('should return all upgradeItems if no upgradeType or faction provided', () => {
    const searchResults = availableUpgradesService.search();
    expect(searchResults.length).toBe(5);
  });

  it('should return only rebel commander upgradeItems if commander upgradeType and rebel faction provided', () => {
    const searchResults = availableUpgradesService.search(UpgradeType.commander, Faction.rebel);
    expect(searchResults.length).toBe(1);
  });

  it('should return only imperial commander upgradeItems if commander upgradeType and imperial faction provided', () => {
    const searchResults = availableUpgradesService.search(UpgradeType.commander, Faction.imperial);
    expect(searchResults.length).toBe(1);
  });

  it('should return only commander upgradeItems if commander upgradeType', () => {
    const searchResults = availableUpgradesService.search(UpgradeType.commander);
    expect(searchResults.length).toBe(2);
  });
});
