import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';
import { HeroChildComponent } from './component-interaction/hero-child/hero-child.component';
import { HeroParentComponent } from './component-interaction/hero-parent/hero-parent.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentInteractionComponent,
    HeroChildComponent,
    HeroParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
