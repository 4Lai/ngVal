import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { agentsDetailedResolver } from './agents-detailed.resolver';

describe('agentsDetailedResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => agentsDetailedResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
