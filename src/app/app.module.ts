import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HeaderSectionHomeComponent } from './shared/components/header-section-home/header-section-home.component';
import { NavigationMenuComponent } from './shared/components/navigation-menu/navigation-menu.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, NotFoundComponent, HeaderSectionHomeComponent, NavigationMenuComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
