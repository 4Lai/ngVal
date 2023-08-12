import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Agents } from '../interfaces/agents';

@Injectable({
  providedIn: 'root'
})
export class AgentsService {

  constructor(private http: HttpClient) { }

  getAgents() {
    return this.http.get<Agents>(`https://valorant-api.com/v1/agents`);
  }
}
