import { TestBed } from '@angular/core/testing';

import { CompetitiveTiersService } from './competitive-tiers.service';

describe('CompetitiveTiersService', () => {
  let service: CompetitiveTiersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompetitiveTiersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
