import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
  filmData=[]
  gotId:number;

  constructor(private apiService:ApiService) { }

  ngOnInit() {
    this.getAllFilm();
  }

  public getAllFilm(){
    this.apiService.getFilmService().subscribe(
      (data)=>{
        this.filmData = data;
        console.log(data);
      }
    );
  }

  public getFilmId(url){
    console.log(url);
    let extractedId = url.replace('https://swapi.co/api/films/', '');
    console.log(parseInt(extractedId));
    this.gotId = parseInt(extractedId);
  }

}
