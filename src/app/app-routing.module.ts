import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';

const routes: Routes = [
  { path: '**', component: EmptyRouteComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
})
export class AppRoutingModule { }