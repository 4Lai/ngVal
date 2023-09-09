import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { EventsService } from '../services/events.service';
import { Events } from '../interfaces/events';
import { map } from 'rxjs';

export const eventsResolver: ResolveFn<Events['data']> = (route, state) => {
  const events = inject(EventsService)

  return events.getEventsData().pipe(map( val => {
    return val.data
  }))
};
