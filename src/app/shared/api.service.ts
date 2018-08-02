import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  api_url = 'https://swapi.co/api/';

  constructor(private httpClient:HttpClient) {}

  getAllService(){
    return  this.httpClient.get(`${this.api_url}`, {observe:'response', responseType:'json'})
      .pipe(map(
        (response:Response) => {
          // console.log(response)
          return response;
        }
      ));
  }


  //https://www.techiediaries.com/angular-tutorial/

}
