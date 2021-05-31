import {VacationsComponent} from './vacations.component';
import {NgModule} from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';

const routes: Routes = [{
  path: '',
  component: VacationsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VacationsRoutingModule{

}
