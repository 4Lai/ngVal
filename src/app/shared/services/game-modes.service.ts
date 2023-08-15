import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GameModes } from '../interfaces/game-modes';

@Injectable({
  providedIn: 'root',
})
export class GameModesService {
  constructor(private http: HttpClient) {}

  getGameModes() {
    return this.http.get<GameModes>(`https://valorant-api.com/v1/gamemodes`);
  }
}
