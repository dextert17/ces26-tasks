import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppComponent }   from './app.component';
import { HeroAppComponent } from './hero-app.component';
import { DashboardComponent } from './dashboard.component';
import { HeroListComponent } from './hero-list.component';
import { HeroDetailComponent } from './hero-detail.component';

@NgModule({
  imports:      [
  	BrowserModule,
  	FormsModule,
    RouterModule.forRoot([
    {
      path: 'heroes',
      component: HeroListComponent
    },
    {
      path: 'dashboard',
      component: DashboardComponent
    },
    {
      path: '',
      redirectTo: '/dashboard',
      pathMatch: 'full'
    }
    ])
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
  ]
})

export class AppModule { }