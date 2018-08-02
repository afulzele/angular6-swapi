import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  api_url = 'https://swapi.co/api/'

  constructor(private httpClient:HttpClient) {}

  getAllService(){
    return  this.httpClient.get(`${this.api_url}`, {observe:'body', responseType:'json'})
      .pipe(map(
        (data:Object) => {
          return data;
        }
      ));
  }

  getFilmService(){
    return this.httpClient.get(`${this.api_url}films`, {observe:'body', responseType:'json'})
      .pipe(map(
        (data:Object)=>{
          console.log(data['results']);
          return data;
        }
      ));
  }
  


  //https://www.techiediaries.com/angular-tutorial/

}
