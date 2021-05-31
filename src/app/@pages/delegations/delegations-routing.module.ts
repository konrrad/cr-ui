import {NgModule} from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';
import {DelegationsComponent} from './delegations.component';

const routes: Routes = [{
  path: '',
  component: DelegationsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DelegationsRoutingModule {

}
