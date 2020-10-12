import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesComponent } from './directives.component';
import { RouterModule } from '@angular/router';
import { HighlightDirective } from './highlight.directive';
import { HighlightComponent } from './highlight/highlight.component';



@NgModule({
  declarations: [DirectivesComponent, HighlightDirective, HighlightComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DirectivesComponent }])
  ]
})
export class DirectivesModule { }
