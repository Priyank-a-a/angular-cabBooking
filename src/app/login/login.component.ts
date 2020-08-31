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

 email   = '';
 Password = '';
 allowServer = false;
 serverCreationStatus = 'no server is created';
 serverCreated = false;
 servers = ['Server-1', 'server-2'];



  constructor(private http: HttpClient) {}

  ngOnInit(): void {
  }

  oncreateServer()
  {
    this.serverCreated = true;
    this.servers.push(this.email, this.Password);
    this.serverCreationStatus = 'server is created: ' + this.email;
  }




  getAuth()
  {
   const obs = this.http.get(this.url);
   obs.subscribe((response) => {
   this.res = response;
   for (let i = 0; i < Object.keys(response).length ; i++)
   {
    console.log(response[i].user_email);
    if (this.email === response[i].user_email)
    {
      window.location.href = 'http://localhost:4200/booking';
    }
    else
    {
      console.log('error');
    }
   }

      });
   }
  }






