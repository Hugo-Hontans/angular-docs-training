import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularElementsComponent } from './angular-elements.component';
import { PopupComponent } from './popup/popup.component';
import { PopupService } from './popup.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AngularElementsComponent, PopupComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AngularElementsComponent }])
  ],
  providers: [PopupService],
  bootstrap: [AngularElementsComponent],
  entryComponents: [PopupComponent]
})
export class AngularElementsModule { }
