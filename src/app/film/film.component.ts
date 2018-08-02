import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  constructor(private apiService:ApiService) { }

  ngOnInit() {
    this.getAllFilm();
  }

  public getAllFilm(){
    this.apiService.getFilmService().subscribe(
      (data)=>{
        console.log(data['count']);
      }
    );
  }

}
