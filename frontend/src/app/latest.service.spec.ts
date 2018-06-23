import { TestBed, inject } from '@angular/core/testing';

import { LatestService } from './latest.service';

describe('LatestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LatestService]
    });
  });

  it('should be created', inject([LatestService], (service: LatestService) => {
    expect(service).toBeTruthy();
  }));
});
