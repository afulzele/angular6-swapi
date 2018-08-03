import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../shared/api.service';
import { forEach } from '../../../../node_modules/@angular/router/src/utils/collection';

@Component({
  selector: 'app-filmid',
  templateUrl: './filmid.component.html',
  styleUrls: ['./filmid.component.css']
})
export class FilmidComponent implements OnInit {
  getId:number;
  characterExtractionLink:string = 'https://swapi.co/api/people/';

  singleFilmData: {
    title:string,
    release_date:Date,
    director:string,
    producer:string,
    description:string,
    characters:any
  }

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

          // console.log(data);
          this.singleFilmData = {
            title: data['title'],
            release_date: data['release_date'],
            director: data['director'],
            producer: data['producer'],
            description: data['opening_crawl'],
            characters: data['characters']
          }
          console.log(this.singleFilmData);
          this.getSingleChar();        
        }
      );
  }

  public getSingleChar(){
    this.singleFilmData['characters'].forEach((value) => {
      let charId = this.apiService.useExtraction(value, this.characterExtractionLink);
      console.log(charId);
    });
  }

}
