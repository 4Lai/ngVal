import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HeaderSectionHomeComponent } from './shared/components/header-section-home/header-section-home.component';
import { NavigationMenuComponent } from './shared/components/navigation-menu/navigation-menu.component';
import { HomeComponent } from './pages/home/home.component';
import { GameModesComponent } from './shared/components/game-modes/game-modes.component';
import { MapsComponent } from './shared/components/maps/maps.component';
import { PopupCategoriesComponent } from './shared/components/popup-categories/popup-categories.component';
import { MatDialogModule } from '@angular/material/dialog'
import { FormsModule } from '@angular/forms';
import { AgentsComponent } from './shared/components/agents/agents.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    HeaderSectionHomeComponent,
    NavigationMenuComponent,
    GameModesComponent,
    MapsComponent,
    PopupCategoriesComponent,
    AgentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
