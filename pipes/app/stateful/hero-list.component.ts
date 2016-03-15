import {Component} from 'angular2/core';
import {FetchJsonPipe} from './fetch-json.pipe';
@Component({
  selector: 'hero-list',
  template: `
    <h4>Heroes from JSON File</h4>
    <div *ngFor="#hero of ('/assets/heroes.json' | fetch) ">
      {{hero.name}}
    </div>
    <p>Heroes as JSON:
    {{'/assets/heroes.json' | fetch | json}}
    </p>
  `,
  pipes: [FetchJsonPipe]
})
export class HeroListComponent {
  /* I've got nothing to do ;-) */
}