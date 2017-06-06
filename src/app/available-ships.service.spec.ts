import {AvailableShipsService} from './available-ships.service';
import {Faction, Ship} from './models';
import {TestShipData} from './ship-data';

describe('AvailableShipsService', () => {
  let ships: Ship[];
  let availableShipsService: AvailableShipsService;

  beforeEach(() => {
    ships = TestShipData.allShips();

    availableShipsService = new AvailableShipsService(ships);
  });

  it('should return all ships if no faction provided', () => {
    const searchResults = availableShipsService.search();
    expect(searchResults.length).toBe(6);
  });

  it('should return only rebel ships if rebel faction provided', () => {
    const searchResults = availableShipsService.search(Faction.rebel);
    expect(searchResults.length).toBe(2);
  });

  it('should return only imperial ships if imperial faction provided', () => {
    const searchResults = availableShipsService.search(Faction.imperial);
    expect(searchResults.length).toBe(4);
  });
});
