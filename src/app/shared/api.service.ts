import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  api_url = 'https://swapi.co/api/'

  constructor(private httpClient:HttpClient) {}

  useExtraction(url, link){
    let extractedId = url.replace(link, '');
    return parseInt(extractedId);
  }

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
          return data['results'];
        }
      ));
  }

  getSingleFilmService(id){
    return this.httpClient.get(`${this.api_url}films/${id}/`, {observe:'body', responseType:'json'})
      .pipe(map(
        (data:Object)=>{
          console.log(data);
          return data;
        }
      ));
  }

  getSingleCharService(id){
    return this.httpClient.get(`${this.api_url}people/${id}/`, {observe:'body', responseType:'json'})
      .pipe(map(
        (data:Object)=>{
          console.log(data);
          return data;
        }
      ));
  }
  


  //https://www.techiediaries.com/angular-tutorial/

}
