import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }   from './app.component';
import { HeroAppComponent } from './hero-app.component';
import { DashboardComponent } from './dashboard.component';
import { HeroListComponent } from './hero-list.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports:      [
  	BrowserModule,
  	FormsModule,
    AppRoutingModule
  ],
  declarations: [
  	AppComponent,
    HeroAppComponent,
    DashboardComponent,
  	HeroListComponent,
  	HeroDetailComponent
  ],
  bootstrap:    [
  	AppComponent,
    HeroAppComponent
  ],
  providers: [HeroService]
})

export class AppModule { }