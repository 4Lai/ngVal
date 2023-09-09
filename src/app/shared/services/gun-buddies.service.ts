import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GunBuddies } from '../interfaces/gun-buddies';

@Injectable({
  providedIn: 'root'
})
export class GunBuddiesService {

  constructor(private http: HttpClient) { }

  getGunBuddies() {
    return this.http.get<GunBuddies>('https://valorant-api.com/v1/buddies');
  }
}
