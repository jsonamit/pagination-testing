import { Component,OnInit } from '@angular/core';
import {GeneralService} from './services/general.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';
  // locFile:any;
  // userData:any ={};
  // fdata:any;
  // keyword:any;
  
  private paper: any = [];
  private question;
  private qindex = 0;
  private totalq = 0;

  constructor(private gservice:GeneralService){
 
  this.paper = [
     {
       id: 1,
       question: 'Usa',
       Option1: 'a',
       Option2: 'b',
       Option3: 'c',
       Option4: 'd'
     },
     {
      id: 1,
       question: 'Uk',
       Option1: 'e',
       Option2: 'f',
       Option3: 'g',
       Option4: 'h'
      },
      {
        id: 1,
       question: 'India',
       Option1: 'i',
       Option2: 'j',
       Option3: 'k',
       Option4: 'l'
      }
  ];
  this.question = this.paper[this.qindex];
  }
  ngOnInit() {
  }

  back(){
    if (this.qindex <= 0) {
      return false;
    }
    this.qindex = this.qindex - 1;
    this.question = this.paper[this.qindex];
    
  }
  next(){
    if (this.paper.length - 2 < this.qindex) {
      return false;
    }
    this.qindex = this.qindex + 1;
    this.question = this.paper[this.qindex];
  }

  calculateResult(){
    console.log('Calculate Result');
  }



/* This Code is for file upload */

  // fileUpload(event:any){
  //   this.locFile=event.target.files[0];
  // }

  
  // createLocation(){ 
  //   let fmdata =  new FormData();
  //   fmdata.append('productImage',this.locFile,this.locFile.name);
  //   //fmdata.append('email',this.userData.email);
  //   // this.gservice.post('/uploadfile',fmdata).subscribe(res=>{
  //   //   console.log('Response',res);
  //   // })
  // }
  // selectEvent(item) {
  //   // do something with selected item
  //   console.log('seleted item',item);
  // }
 
  // onChangeSearch(val: string) {
  //   // fetch remote data from here
  //   // And reassign the 'data' which is binded to 'data' property.
  // }
  
  // onFocused(e){
  //   // do something when input is focused
  // }

}
