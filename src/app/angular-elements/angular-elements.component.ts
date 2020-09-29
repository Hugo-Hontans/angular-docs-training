import { Component, Injector } from '@angular/core';
import { PopupService } from './popup.service';
import { createCustomElement } from '@angular/elements';
import { PopupComponent } from './popup/popup.component';

@Component({
  selector: 'app-angular-elements',
  templateUrl: './angular-elements.component.html',
  styleUrls: ['./angular-elements.component.scss']
})
export class AngularElementsComponent {

  constructor(injector: Injector, public popup: PopupService) {
    // Convert `PopupComponent` to a custom element.
    const PopupElement = createCustomElement(PopupComponent, {injector});
    // Register the custom element with the browser.
    customElements.define('popup-element', PopupElement);
  }

}
