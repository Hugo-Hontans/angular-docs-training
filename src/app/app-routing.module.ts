import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';

const routes: Routes = [
  { path: 'component-interaction', component: ComponentInteractionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
