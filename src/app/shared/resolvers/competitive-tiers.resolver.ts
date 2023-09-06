import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { CompetitiveTiersService } from '../services/competitive-tiers.service';
import { map } from 'rxjs';
import { CompetitiveTiers } from '../interfaces/competitive-tiers';

export const competitiveTiersResolver: ResolveFn<CompetitiveTiers['data']> = (route, state) => {
  const tiersSer = inject(CompetitiveTiersService)

  return tiersSer.getTiers().pipe(map(val => {
    return val.data
  }))
};
