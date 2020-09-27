import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';
import { HeroChildComponent } from './component-interaction/hero-child/hero-child.component';
import { HeroParentComponent } from './component-interaction/hero-parent/hero-parent.component';
import { CountdownTimerComponent } from './component-interaction/countdown-timer/countdown-timer.component';
import { CountdownParentComponent } from './component-interaction/countdown-parent/countdown-parent.component';
import { CountdownViewChildParentComponent } from './component-interaction/countdown-view-child-parent/countdown-view-child-parent.component';
import { MissionControlComponent } from './component-interaction/mission-control/mission-control.component';
import { AstronautComponent } from './component-interaction/astronaut/astronaut.component';

@NgModule({
  declarations: [
    AppComponent,
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
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
