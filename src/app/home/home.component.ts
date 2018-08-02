import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private apiService:ApiService) { }

  ngOnInit() {
    this.getAll();
  }

  public getAll(){
    this.apiService.getAllService().subscribe(
      (data) => {
        console.log(data);
      }
    );
  }

}
