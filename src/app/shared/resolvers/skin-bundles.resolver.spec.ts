import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { skinBundlesResolver } from './skin-bundles.resolver';

describe('skinBundlesResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => skinBundlesResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
