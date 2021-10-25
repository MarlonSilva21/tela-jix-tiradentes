import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from "./home/home.component";
import {RouterModule} from "@angular/router";

const routes = [

  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent}

]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
