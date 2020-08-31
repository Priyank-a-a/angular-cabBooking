import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
 res = {};
 url = 'http://localhost:8080/api/user';
 constructor(private http: HttpClient ) { }

  ngOnInit(): void {
  }



  getData()
  {
    let obs = this.http.get(this.url);
    obs.subscribe((response) => {
      console.log(response);
    });
  }



}
