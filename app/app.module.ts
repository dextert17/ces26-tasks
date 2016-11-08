import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }   from './app.component';
import { HeroListComponent } from './hero-list.component';
import { HeroDetailComponent } from './hero-detail.component';

@NgModule({
  imports:      [
  	BrowserModule,
  	FormsModule
  ],
  declarations: [
  	AppComponent,
  	HeroListComponent,
  	HeroDetailComponent
  ],
  bootstrap:    [
  	AppComponent,
  	HeroListComponent
  ]
})

export class AppModule { }