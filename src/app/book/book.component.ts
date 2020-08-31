import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
   date: string;
    alert: boolean ;
   showMyMessage = false;

   constructor() {
   setInterval(() => {
    let currentDate = new Date();
     this.date = currentDate.toString() + "" + currentDate.toLocaleTimeString();

   }, 1000);



}
 ngOnInit(): void {
  }

  showMessageSoon() {
  setTimeout(() => {
    this.showMyMessage = true;
  }, 100);
}

}
