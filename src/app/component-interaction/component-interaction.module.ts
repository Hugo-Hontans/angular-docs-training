import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ComponentInteractionComponent } from './component-interaction.component';
import { HeroChildComponent } from './hero-child/hero-child.component';
import { HeroParentComponent } from './hero-parent/hero-parent.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { CountdownParentComponent } from './countdown-parent/countdown-parent.component';
import { CountdownViewChildParentComponent } from './countdown-view-child-parent/countdown-view-child-parent.component';
import { MissionControlComponent } from './mission-control/mission-control.component';
import { AstronautComponent } from './astronaut/astronaut.component';

@NgModule({
  declarations: [
    ComponentInteractionComponent,
    HeroChildComponent,
    HeroParentComponent,
    CountdownTimerComponent,
    CountdownParentComponent,
    CountdownViewChildParentComponent,
    MissionControlComponent,
    AstronautComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ComponentInteractionComponent }])
  ]
})
export class ComponentInteractionModule { }
