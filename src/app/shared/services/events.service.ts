import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Events } from '../interfaces/events';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  constructor(private http: HttpClient) {}

  getEventsData() {
    return this.http.get<Events>(`https://valorant-api.com/v1/events`);
  }
}
