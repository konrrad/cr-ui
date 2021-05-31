import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SalaryBonusesComponent} from '@pages/salary-bonuses/salary-bonuses.component';

const routes: Routes = [{
  path: '',
  component: SalaryBonusesComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalaryBonusesRoutingModule{

}
