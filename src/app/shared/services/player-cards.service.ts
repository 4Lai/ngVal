import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PlayerCards } from '../interfaces/player-cards';

@Injectable({
  providedIn: 'root',
})
export class PlayerCardsService {
  constructor(private http: HttpClient) {}

  getPlayerCards() {
    return this.http.get<PlayerCards>(
      `https://valorant-api.com/v1/playercards`
    );
  }
}
