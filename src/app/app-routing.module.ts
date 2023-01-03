import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { AuthGuardService } from './auth-guard.service';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: 'configs', redirectTo: 'configs/users', pathMatch: 'full' },
  { path: 'configs/users', component: UsersComponent, canActivate: [AuthGuardService] },
  { path: '**', component: EmptyRouteComponent },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
})
export class AppRoutingModule { }
