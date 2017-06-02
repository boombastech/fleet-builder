import { TestBed, inject } from '@angular/core/testing';

import { AvailableShipsService } from './available-ships.service';

describe('AvailableShipsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AvailableShipsService]
    });
  });

  it('should be created', inject([AvailableShipsService], (service: AvailableShipsService) => {
    expect(service).toBeTruthy();
  }));
});
