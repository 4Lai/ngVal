import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { agentsResolver } from './shared/resolvers/agents.resolver';
import { gameModesResolver } from './shared/resolvers/game-modes.resolver';
import { mapsResolver } from './shared/resolvers/maps.resolver';
import { GameModesComponent } from './shared/components/game-modes/game-modes.component';
import { MapsComponent } from './shared/components/maps/maps.component';
import { AgentsComponent } from './shared/components/agents/agents.component';
import { agentsDetailedResolver } from './shared/resolvers/agents-detailed.resolver';
import { CompetitiveTiersComponent } from './shared/components/competitive-tiers/competitive-tiers.component';
import { competitiveTiersResolver } from './shared/resolvers/competitive-tiers.resolver';
import { WeaponsComponent } from './shared/components/weapons/weapons.component';
import { weaponsResolver } from './shared/resolvers/weapons.resolver';
import { WeaponsSingleDetailsComponent } from './shared/components/weapons-single-details/weapons-single-details.component';
import { SkinBundlesComponent } from './shared/components/skin-bundles/skin-bundles.component';
import { skinBundlesResolver } from './shared/resolvers/skin-bundles.resolver';
import { GunBuddiesComponent } from './shared/components/gun-buddies/gun-buddies.component';
import { gunBuddiesResolver } from './shared/resolvers/gun-buddies.resolver';
import { PlayerTitlesAndCardsComponent } from './shared/components/player-titles-and-cards/player-titles-and-cards.component';
import { playerTitlesAndCardsResolver } from './shared/resolvers/player-titles-and-cards.resolver';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
    resolve: { agents: agentsResolver },
  },
  {
    path: 'game-modes',
    component: GameModesComponent,
    resolve: { gameModes: gameModesResolver },
  },
  {
    path: 'maps',
    component: MapsComponent,
    resolve: { mapList: mapsResolver },
  },
  {
    path: 'agents',
    component: AgentsComponent,
    resolve: { agentsDetailed: agentsDetailedResolver },
  },
  {
    path: 'competitive-tiers',
    component: CompetitiveTiersComponent,
    resolve: { tiers: competitiveTiersResolver },
  },
  {
    path: 'weapons',
    component: WeaponsComponent,
    resolve: { weapons: weaponsResolver },
  },
  {
    path: 'weapons/:gun',
    component: WeaponsSingleDetailsComponent,
    resolve: { weaponsDetails: weaponsResolver },
  },
  {
    path: 'skin-bundles',
    component: SkinBundlesComponent,
    resolve: { skinBundles: skinBundlesResolver },
  },
  {
    path: 'gun-buddies',
    component: GunBuddiesComponent,
    resolve: { gunBuddies: gunBuddiesResolver },
  },
  {
    path: 'player-cards-and-titles',
    component: PlayerTitlesAndCardsComponent,
    resolve: { pTitlesAndCards: playerTitlesAndCardsResolver },
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
