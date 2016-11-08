import { Component } from '@angular/core';

@Component({
  selector: 'heroes-app',
  template: `
  	<h1>{{title}}</h1>
  	<nav>
  		<a routerLink="/dashboard">Dashboard</a>
   		<a routerLink="/heroes">Heros</a>
   	</nav>
   	<router-outlet></router-outlet>
 	`
})

export class HeroAppComponent {
  title = 'Tour of Heroes';
}