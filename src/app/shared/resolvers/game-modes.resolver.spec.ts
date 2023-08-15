import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { gameModesResolver } from './game-modes.resolver';

describe('gameModesResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => gameModesResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
