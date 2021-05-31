import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from './material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';
import {NavbarComponent} from '@shared/navbar/navbar.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [NavbarComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    MaterialModule,
    FlexLayoutModule,
    CommonModule,
    FormsModule,
    NavbarComponent,
    HttpClientModule,
    RouterModule
  ]
})
export class SharedModule {
}
