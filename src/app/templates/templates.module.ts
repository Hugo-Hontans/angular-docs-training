import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { AppSizerComponent } from './app-sizer/app-sizer.component';
import { RouterModule } from '@angular/router';
import { SvgComponent } from './svg/svg.component';

@NgModule({
  declarations: [TwoWayBindingComponent, AppSizerComponent, SvgComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: TwoWayBindingComponent }])
  ]
})
export class TemplatesModule { }
