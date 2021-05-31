import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TreetableModule} from '@vaseap/ng-material-treetable';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TreetableModule
  ],
  exports: [
    TreetableModule
  ]
})
export class MaterialModule {

}
