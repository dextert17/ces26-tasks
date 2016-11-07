import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { HeroListComponent } from './hero-list.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [
  	AppComponent,
  	HeroListComponent
  ],
  bootstrap:    [
  	AppComponent,
  	HeroListComponent
  ]
})
export class AppModule { }