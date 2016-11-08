import { Component } from '@angular/core';

import { HeroService } from './hero.service';

@Component({
  selector: 'heroes-app',
  template: `
  	<h1>{{title}}</h1>
  	<nav>
  		<a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
   		<a routerLink="/heroes" routerLinkActive="active">Heroes</a>
  	</nav>
		<router-outlet></router-outlet>
	`,
	styleUrls: [ 'app/hero-app.component.css' ],
  providers: [HeroService]
})

export class HeroAppComponent {
  title = 'Tour of Heroes';
}