import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TokenAdapter } from '@gfa/gfa-infra';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { AuthGuardService } from './auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    TokenAdapter,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
