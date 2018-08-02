import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  api_url = 'https://swapi.co/api/'
  films_api_url = ''
  people_api_url = ''
  planets_api_url = ''
  species_api_url = ''
  starships_api_url = ''
  vehicles_api_url = ''

  constructor(private httpClient:HttpClient) {}

  getAllService(){
    return  this.httpClient.get(`${this.api_url}`, {observe:'body', responseType:'json'})
      .pipe(map(
        (data:Object) => {
          this.films_api_url = data['films']
          this.people_api_url = data['people']
          this.planets_api_url = data['planets']
          this.species_api_url = data['species']
          this.starships_api_url = data['starships']
          this.vehicles_api_url = data['vehicles']
          return data;
        }
      ));
  }
  


  //https://www.techiediaries.com/angular-tutorial/

}
