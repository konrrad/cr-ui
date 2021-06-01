import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppRoutingModule} from '@app/app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from '@core/auth/login/login.component';
import {MainComponent} from '@pages/main/main.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {API_URL, ApiUrlInterceptor} from '@core/auth/api-url.interceptor';
import {environment} from '@env/environment.prod';
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
  providers: [
    {provide: API_URL, useValue: environment.apiUrl},
    {provide: HTTP_INTERCEPTORS, useClass: ApiUrlInterceptor, multi: true, deps: [API_URL]}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
