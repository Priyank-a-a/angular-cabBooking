import { Component, OnInit } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  res = {};
url = 'http://localhost:8080/api/user';

 serverName = '';
 serverPassword = '';
 allowServer = false;
 serverCreationStatus = 'no server is created';
 serverCreated = false;
 servers = ['Server-1', 'server-2'];



  constructor(private http: HttpClient) {
   setTimeout(() =>
   {
     this.allowServer = true;
   }, 2000);


   }

  ngOnInit(): void {
  }

  oncreateServer()
  {
    this.serverCreated = true;
    this.servers.push(this.serverName, this.serverPassword);
    this.serverCreationStatus = 'server is created: ' + this.serverName;
  }






  getAuth()
  {
   let obs = this.http.get(this.url);
   obs.subscribe((response) => {
     this.res = JSON.stringify(response);
   for(let i=0; i<Object.keys(response).length ; i++)
   {
     if(response[i] === this.serverName[i])
     {
       console.log('found!!');
     }
     else
     {
       console.log('not found');
     }
      }
   });
  }
}
