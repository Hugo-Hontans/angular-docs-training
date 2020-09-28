import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicComponentComponent } from './dynamic-component.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [DynamicComponentComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DynamicComponentComponent }])
  ]
})
export class DynamicComponentModule { }
