import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicComponentComponent } from './dynamic-component.component';
import { RouterModule } from '@angular/router';
import { AdDirective } from './ad.directive';
import { AdBannerComponent } from './ad-banner/ad-banner.component';
import { HeroJobAdComponent } from './hero-job-ad/hero-job-ad.component';
import { HeroProfileComponent } from './hero-profile/hero-profile.component';



@NgModule({
  declarations: [DynamicComponentComponent, AdDirective, AdBannerComponent, HeroJobAdComponent, HeroProfileComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DynamicComponentComponent }])
  ]
})
export class DynamicComponentModule { }
