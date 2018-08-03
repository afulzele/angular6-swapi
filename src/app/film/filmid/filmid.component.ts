import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../shared/api.service';

import { Film } from '../../shared/film.model';
import { Character } from '../../shared/character.model';

@Component({
  selector: 'app-filmid',
  templateUrl: './filmid.component.html',
  styleUrls: ['./filmid.component.css']
})
export class FilmidComponent implements OnInit {
  getId:number;
  characterExtractionLink:string = 'https://swapi.co/api/people/';

  singleFilmData:Film;
  singleCharData:Character;

  constructor(private router:ActivatedRoute, private apiService:ApiService) { }

  ngOnInit() {
    this.getId = this.router.snapshot.params['id'];
    // console.log(this.getId);
    this.getSingleFilm();
  }

  public getSingleFilm(){
    this.apiService.getSingleFilmService(this.getId)
      .subscribe(
        (data)=>{

          this.singleFilmData = {
            title: data['title'],
            release_date: data['release_date'],
            director: data['director'],
            producer: data['producer'],
            description: data['opening_crawl'],
            characters: data['characters']
          }
          // console.log(this.singleFilmData);
          this.getSingleChar();
        }
      );
  }

  public getSingleChar(){
    this.singleFilmData['characters'].forEach((value) => {
      let charId = this.apiService.useExtraction(value, this.characterExtractionLink);
      // console.log(charId);
      this.apiService.getSingleCharService(charId).subscribe(
        (data)=>{
          this.singleCharData = {
            name: data['name'],
            birth_year: data['birth_year'],
            eye_color: data['eye_color'],
            films: data['films'],
            gender: data['gender'],
            height: data['height'],
            mass: data['mass'],
            skin_color: data['skin_color']
          }
        }
      );
      
    });
  }

}
