import { Component, Input } from '@angular/core';

import { Hero } from './hero';

@Component({
  selector: 'my-hero-detail',
  template: `
  	<div *ngIf="hero">
    	<h2>{{hero.name}} details!</h2>
      <div class="details">
    	  <div><label>id: </label>{{hero.id}}</div>
    	  <div>
     	 	  <label>name: </label>
     	 	  <input [(ngModel)]="hero.name" placeholder="name"/>
    	  </div>
      </div>
  	</div>
	`,
  styles: [`
    .details {
      vertical-align: top;
      display: inline-block;
      padding: 0 10px 10px 10px;
      margin: 0 25px 25px 25px;
      max-width: 100%;
      text-align: left;
    }
    .details input {
      padding: 6px 10px;
      display: inline-block;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-sizing: border-box;
    }
    .details label {
      display: inline-block;
      width: 50px;
    }
  `]
})
export class HeroDetailComponent {
	@Input()
	hero: Hero;
}