import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { competitiveTiersResolver } from './competitive-tiers.resolver';

describe('competitiveTiersResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => competitiveTiersResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});