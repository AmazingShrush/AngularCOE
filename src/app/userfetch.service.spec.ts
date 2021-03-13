import { TestBed } from '@angular/core/testing';

import { UserfetchService } from './userfetch.service';

describe('UserfetchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserfetchService = TestBed.get(UserfetchService);
    expect(service).toBeTruthy();
  });
});
