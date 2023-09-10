import { Injectable } from '@angular/core';
import { Categories } from '../../interfaces/categories';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor() {}

  categories: Categories[] = [
    {
      title: 'Game modes',
      url: '/game-modes',
    },
    {
      title: 'Maps',
      url: '/maps',
    },
    {
      title: 'Agents',
      url: '/agents',
    },
    {
      title: 'Competitive tiers',
      url: '/competitive-tiers',
    },
    {
      title: 'Weapons',
      url: '/weapons',
    },
    {
      title: 'Skin bundles',
      url: '/skin-bundles',
    },
    {
      title: 'Gun buddies',
      url: '/gun-buddies',
    },
    {
      title: 'Player cards and titles',
      url: '/player-cards-and-titles',
    },
  ];
}
