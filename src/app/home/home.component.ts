import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data:any;
  constructor() {
    this.data = [
      {
        id: 1,
        name: 'Usa'
      },
      {
       id: 1,
       name: 'Uk'
       },
       {
         id: 1,
         name: 'Japan'
       },
      {
        id: 2,
        name: 'England'
      }
   ];

   }

  ngOnInit() {
  }

}
