import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';
import './rxjs-extensions';

import { AppRoutingModule }     from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }   from './app.component';
import { HeroAppComponent } from './hero-app.component';
import { DashboardComponent } from './dashboard.component';
import { HeroListComponent } from './hero-list.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroSearchComponent } from './hero-search.component';
import { HeroService } from './hero.service';

@NgModule({
  imports:      [
  	BrowserModule,
  	FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
  	AppComponent,
    HeroAppComponent,
    DashboardComponent,
  	HeroListComponent,
  	HeroDetailComponent,
    HeroSearchComponent
  ],
  bootstrap:    [
  	AppComponent,
    HeroAppComponent
  ],
  providers: [HeroService]
})

export class AppModule { }