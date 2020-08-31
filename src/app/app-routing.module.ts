import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { LoginComponent } from './login/login.component';
import { BookComponent } from './book/book.component';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
const routes : Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
 {path: 'login' , component: LoginComponent},
{path: 'booking', component: BookComponent},
{path: 'confirmation', component: ConfirmationComponent},
{path: '**', component: PathNotFoundComponent}

];

@NgModule({
  imports : [RouterModule.forRoot(routes)],
  exports : [RouterModule]
})
export class AppRoutingModule { }
