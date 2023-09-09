import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { gunBuddiesResolver } from './gun-buddies.resolver';

describe('gunBuddiesResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => gunBuddiesResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
