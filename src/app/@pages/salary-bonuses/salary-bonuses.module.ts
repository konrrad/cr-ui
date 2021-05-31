import {NgModule} from '@angular/core';
import {SalaryBonusesComponent} from '@pages/salary-bonuses/salary-bonuses.component';
import {SharedModule} from '@shared/shared.module';
import {SalaryBonusesRoutingModule} from '@pages/salary-bonuses/salary-bonuses-routing.module';
import { SalaryHistoryComponent } from './salary-history/salary-history.component';
import { BonusesHistoryComponent } from './bonuses-history/bonuses-history.component';

@NgModule({
  declarations: [
    SalaryBonusesComponent,
    SalaryHistoryComponent,
    BonusesHistoryComponent],
  imports: [SalaryBonusesRoutingModule, SharedModule]
})
export class SalaryBonusesModule {
}
