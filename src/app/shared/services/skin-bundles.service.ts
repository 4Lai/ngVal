import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SkinBundles } from '../interfaces/skin-bundles';

@Injectable({
  providedIn: 'root',
})
export class SkinBundlesService {
  constructor(private http: HttpClient) {}

  getSkinBundlesData() {
   return this.http.get<SkinBundles>(`https://valorant-api.com/v1/bundles`);
  }
}
