import { TestBed } from '@angular/core/testing';

import { SkinBundlesService } from './skin-bundles.service';

describe('SkinBundlesService', () => {
  let service: SkinBundlesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkinBundlesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
