import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Maps } from '../interfaces/maps';

@Injectable({
  providedIn: 'root',
})
export class MapsService {
  constructor(private http: HttpClient) {}

  getMapsList() {
    return this.http.get<Maps>(`https://valorant-api.com/v1/maps`);
  }
}
