import { Component } from '@angular/core';

import { HeroService } from './hero.service';

@Component({
  selector: 'heroes-app',
  template: `
  	<h1>{{title}}</h1>
  	<nav>
  		<a routerLink="/dashboard">Dashboard</a>
   		<a routerLink="/heroes">Heros</a>
   	</nav>
   	<router-outlet></router-outlet>
 	`,
 	providers: [HeroService]
})

export class HeroAppComponent {
  title = 'Tour of Heroes';
}