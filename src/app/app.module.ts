import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { AppComponent } from './app.component';
import { PeopleComponent } from './people/people.component';
import { FilmComponent } from './film/film.component';
import { StarshipComponent } from './starship/starship.component';
import { VehicalComponent } from './vehical/vehical.component';
import { SpeciesComponent } from './species/species.component';
import { PlanetComponent } from './planet/planet.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    FilmComponent,
    StarshipComponent,
    VehicalComponent,
    SpeciesComponent,
    PlanetComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
