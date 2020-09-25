import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-child',
  templateUrl: './hero-child.component.html',
  styleUrls: ['./hero-child.component.scss']
})
export class HeroChildComponent {
  @Input('hero')
  get heroName(): string { return this._name; }
  set heroName(name: string) {
    this._name = (name && name.trim()) || '<no name set>';
  }
  private _name = '';
  @Input('master') masterName: string;
}
