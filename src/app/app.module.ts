import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppRoutingModule} from '@app/app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from '@core/auth/login/login.component';
import {MainComponent} from '@pages/main/main.component';

import {SharedModule} from '@shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
