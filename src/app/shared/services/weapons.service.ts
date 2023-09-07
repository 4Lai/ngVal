import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Weapons } from '../interfaces/weapons';

@Injectable({
  providedIn: 'root'
})
export class WeaponsService {

  constructor(private http:HttpClient) { }

  getWeaponsData() {
   return this.http.get<Weapons>(`https://valorant-api.com/v1/weapons`);
  }
  
}
