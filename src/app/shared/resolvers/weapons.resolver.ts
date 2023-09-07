import { ResolveFn } from '@angular/router';
import { Weapons } from '../interfaces/weapons';
import { inject } from '@angular/core';
import { WeaponsService } from '../services/weapons.service';
import { map } from 'rxjs';

export const weaponsResolver: ResolveFn<Weapons['data']> = (route, state) => {
  const weaponsData = inject(WeaponsService)

  return weaponsData.getWeaponsData().pipe(map(val => {
    return val.data
  }))
};
