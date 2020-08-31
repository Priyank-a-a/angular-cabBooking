import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  res = {};
 // url = 'https://api.github.com/users';
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
  




  /*getData()
  {
    let obs = this.http.get(this.url);
    obs.subscribe((response) =>{
    // 1. this.res = JSON.stringify(response)
   // 2. console.log(response[0].login)
   // 3.

   for(let i = 0 ; i < Object.keys(response).length ; i++)
   {
     console.log(response[i].login);
   }
  }
  );
  }*/



}
