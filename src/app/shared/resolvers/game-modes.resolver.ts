import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { GameModes } from '../interfaces/game-modes';
import { GameModesService } from '../services/game-modes.service';
import { map } from 'rxjs';

export const gameModesResolver: ResolveFn<GameModes['data']> = (route, state) => {
  const gameModesList = inject(GameModesService)

  return gameModesList.getGameModes().pipe(map(val => {
    return val.data
  })

  )
};
