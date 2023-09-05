import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { MapsService } from '../services/maps.service';
import { Maps } from '../interfaces/maps';
import { map } from 'rxjs';

export const mapsResolver: ResolveFn<Maps['data']> = (route, state) => {
  const mapList = inject(MapsService)
  
  return mapList.getMapsList().pipe(map(val => {
    return val.data
  } ))
};
