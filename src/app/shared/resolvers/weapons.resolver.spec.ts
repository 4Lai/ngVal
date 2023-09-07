import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { weaponsResolver } from './weapons.resolver';

describe('weaponsResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => weaponsResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
