import { TestBed } from '@angular/core/testing';

import { GunBuddiesService } from './gun-buddies.service';

describe('GunBuddiesService', () => {
  let service: GunBuddiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GunBuddiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
