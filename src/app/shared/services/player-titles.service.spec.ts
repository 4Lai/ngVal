import { TestBed } from '@angular/core/testing';

import { PlayerTitlesService } from './player-titles.service';

describe('PlayerTitlesService', () => {
  let service: PlayerTitlesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerTitlesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
