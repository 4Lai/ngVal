import { ResolveFn } from '@angular/router';
import { PlayerCardsService } from '../services/player-cards.service';
import { inject } from '@angular/core';
import { PlayerTitlesService } from '../services/player-titles.service';
import { combineLatest, map } from 'rxjs';
import { PlayerCards } from '../interfaces/player-cards';
import { PlayerTitles } from '../interfaces/player-titles';

export const playerTitlesAndCardsResolver: ResolveFn<[PlayerCards, PlayerTitles]> = (
  route,
  state
) => {
  const playerCardsService = inject(PlayerCardsService);
  const playerTitlesService = inject(PlayerTitlesService);
  const combinedData = combineLatest([
    playerCardsService.getPlayerCards(),
    playerTitlesService.getPlayerTitles(),
  ]).pipe(
    map((val) => {
      return val;
    })
  );

  return combinedData
};
