import { ResolveFn } from '@angular/router';
import { SkinBundles } from '../interfaces/skin-bundles';
import { inject } from '@angular/core';
import { SkinBundlesService } from '../services/skin-bundles.service';
import { map } from 'rxjs';

export const skinBundlesResolver: ResolveFn<SkinBundles['data']> = (
  route,
  state
) => {
  const skinBundles = inject(SkinBundlesService);
  
  return skinBundles.getSkinBundlesData().pipe(
    map((val) => {
      return val.data;
    })
  );
};
