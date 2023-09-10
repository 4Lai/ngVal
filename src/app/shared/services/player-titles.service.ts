import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PlayerTitles } from '../interfaces/player-titles';

@Injectable({
  providedIn: 'root',
})
export class PlayerTitlesService {
  constructor(private http: HttpClient) {}

  getPlayerTitles() {
    return this.http.get<PlayerTitles>(
      `https://valorant-api.com/v1/playertitles`
    );
  }
}
