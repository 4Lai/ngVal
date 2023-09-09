import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { eventsResolver } from './events.resolver';

describe('eventsResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => eventsResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
