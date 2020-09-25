import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-parent',
  templateUrl: './hero-parent.component.html',
  styleUrls: ['./hero-parent.component.scss']
})
export class HeroParentComponent {
  heroes = ['Dr IQ', '', 'Bombasto'];
  master = 'Master';
}
