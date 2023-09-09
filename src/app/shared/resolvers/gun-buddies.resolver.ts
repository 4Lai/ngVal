import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { GunBuddiesService } from '../services/gun-buddies.service';
import { GunBuddies } from '../interfaces/gun-buddies';
import { map } from 'rxjs';

export const gunBuddiesResolver: ResolveFn<GunBuddies['data']> = (route, state) => {
  const gunBuddies = inject(GunBuddiesService)

  return gunBuddies.getGunBuddies().pipe(map( val => {
    return val.data
  }))
};
