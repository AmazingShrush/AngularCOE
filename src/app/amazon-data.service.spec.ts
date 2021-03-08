import { TestBed } from '@angular/core/testing';

import { AmazonDataService } from './amazon-data.service';

describe('AmazonDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AmazonDataService = TestBed.get(AmazonDataService);
    expect(service).toBeTruthy();
  });
});
