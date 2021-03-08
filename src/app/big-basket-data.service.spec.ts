import { TestBed } from '@angular/core/testing';

import { BigBasketDataService } from './big-basket-data.service';

describe('BigBasketDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BigBasketDataService = TestBed.get(BigBasketDataService);
    expect(service).toBeTruthy();
  });
});
