import { Component, Input, SimpleChange } from '@angular/core';

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
  messages: string[];

  ngOnChanges(changes: SimpleChange[]) {
    const messages = [];
    for (const propName in changes) {
      const changedProp = changes[propName];
      if (changedProp.isFirstChange()) {
        messages.push(`Initial value of ${propName} is ${changedProp.currentValue}`);
      } else {
        messages.push(`${propName} changed from ${changedProp.previousValue} to ${changedProp.currentValue}`);
      }
    }
    this.messages = messages;
  }
}
