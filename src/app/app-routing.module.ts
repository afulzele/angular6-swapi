import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { PeopleComponent } from "./people/people.component";
import { FilmComponent } from "./film/film.component";
import { PlanetComponent } from "./planet/planet.component";
import { SpeciesComponent } from "./species/species.component";
import { StarshipComponent } from "./starship/starship.component";
import { VehicalComponent } from "./vehical/vehical.component";
import { FilmhomeComponent } from "./film/filmhome/filmhome.component";
import { FilmidComponent } from "./film/filmid/filmid.component";

const appRoutes:Routes = [
    { path:'', redirectTo:'home', pathMatch:'full' },
    { path:'home', component: HomeComponent },
    { path:'people', component: PeopleComponent },
    { path:'films', component: FilmComponent, children:[
        { path:'', component: FilmhomeComponent },
        { path:':id', component: FilmidComponent },
    ]},    
    { path:'planets', component: PlanetComponent },
    { path:'species', component: SpeciesComponent },
    { path:'starships', component: StarshipComponent },
    { path:'vehicles', component: VehicalComponent },
]

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}