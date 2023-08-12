import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { agentsResolver } from './agents.resolver';

describe('agentsResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => agentsResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
