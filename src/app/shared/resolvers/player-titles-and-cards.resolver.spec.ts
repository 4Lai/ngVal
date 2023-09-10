import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { playerTitlesAndCardsResolver } from './player-titles-and-cards.resolver';

describe('playerTitlesAndCardsResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => playerTitlesAndCardsResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
