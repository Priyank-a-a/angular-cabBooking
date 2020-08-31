import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
   date: string;
    alert: boolean ;


   constructor() {
   setInterval(() => {
    let currentDate = new Date();
     this.date = currentDate.toString() + "" + currentDate.toLocaleTimeString();

   }, 1000);
   


}
 ngOnInit(): void {
  }

}
