import { TestBed } from '@angular/core/testing';

import { BeerAPIService } from './beer-api.service';

describe('BeerAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BeerAPIService = TestBed.get(BeerAPIService);
    expect(service).toBeTruthy();
  });
});
