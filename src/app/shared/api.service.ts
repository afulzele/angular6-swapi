import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  api_url = 'http https://swapi.co/api/';

  constructor(private httpClient:HttpClient) {}

  getAll(){
    return  this.httpClient.get(`${this.api_url}`);
  }

}
