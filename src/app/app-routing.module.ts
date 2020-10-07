import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'component-interaction', loadChildren: () => import('./component-interaction/component-interaction.module').then(module => module.ComponentInteractionModule) },
  { path: 'dynamic-component', loadChildren: () => import('./dynamic-component/dynamic-component.module').then(module => module.DynamicComponentModule) },
  { path: 'angular-elements', loadChildren: () => import('./angular-elements/angular-elements.module').then(module => module.AngularElementsModule) },
  { path: 'templates', loadChildren: () => import('./templates/templates.module').then(module => module.TemplatesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
