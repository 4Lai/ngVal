import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CompetitiveTiers } from '../interfaces/competitive-tiers';

@Injectable({
  providedIn: 'root'
})
export class CompetitiveTiersService {

  constructor(private http: HttpClient) { }

  getTiers() {
    return this.http.get<CompetitiveTiers>(`https://valorant-api.com/v1/competitivetiers`);
  }
}
