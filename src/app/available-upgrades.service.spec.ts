import { TestBed, inject } from '@angular/core/testing';

import { AvailableUpgradesService } from './available-upgrades.service';

describe('AvailableUpgradesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AvailableUpgradesService]
    });
  });

  it('should be created', inject([AvailableUpgradesService], (service: AvailableUpgradesService) => {
    expect(service).toBeTruthy();
  }));
});
