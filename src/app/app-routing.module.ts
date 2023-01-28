import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { ErrorRoutingModule } from './error-routing/error-routing.module';
import { View3Component } from './view3/view3.component';
import { View2Component } from './view2/view2.component';
import { View1Component } from './view1/view1.component';

export const routes: Routes = [
  { path: '', redirectTo: 'view1', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'view3', component: View3Component, data: { text: 'View 3' } },
  { path: 'view2', component: View2Component, data: { text: 'View 2' } },
  { path: 'view1', component: View1Component, data: { text: 'View 1' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ErrorRoutingModule],
  exports: [RouterModule, ErrorRoutingModule]
})
export class AppRoutingModule {
}
