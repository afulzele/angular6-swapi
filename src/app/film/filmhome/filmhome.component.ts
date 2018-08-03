import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filmhome',
  templateUrl: './filmhome.component.html',
  styleUrls: ['./filmhome.component.css']
})
export class FilmhomeComponent implements OnInit {
  filmData=[]
  gotId:number;
  extractionLink:string = 'https://swapi.co/api/films/';

  constructor(private apiService:ApiService, private router:Router) { }

  ngOnInit() {
    this.getAllFilm();
  }

  public getAllFilm(){
    this.apiService.getFilmService().subscribe(
      (data)=>{
        this.filmData = data;
        // console.log(data);
      }
    );
  }

  public getFilmId(url){
    this.gotId = this.apiService.useExtraction(url, this.extractionLink);
    this.router.navigate(['/films/'+this.gotId]);
  }

}
