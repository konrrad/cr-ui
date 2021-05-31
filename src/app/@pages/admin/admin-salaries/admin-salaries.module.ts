import { NgModule } from '@angular/core';
import { AdminSalariesHistoryComponent } from './admin-salaries-history/admin-salaries-history.component';
import { AdminBonusesHistoryComponent } from './admin-bonuses-history/admin-bonuses-history.component';
import {SharedModule} from '@shared/shared.module';
import {AdminSalariesRoutingModule} from '@pages/admin/admin-salaries/admin-salaries-routing.module';
import {AdminSalariesComponent} from '@pages/admin/admin-salaries/admin-salaries.component';
import { AdminSalaryFormComponent } from './admin-salary-form/admin-salary-form.component';
import { AdminBonusFormComponent } from './admin-bonus-form/admin-bonus-form.component';



@NgModule({
  declarations: [AdminSalariesHistoryComponent, AdminBonusesHistoryComponent, AdminSalariesComponent, AdminSalaryFormComponent, AdminBonusFormComponent],
  providers: [],
  imports: [
    SharedModule, AdminSalariesRoutingModule
  ]
})
export class AdminSalariesModule { }
