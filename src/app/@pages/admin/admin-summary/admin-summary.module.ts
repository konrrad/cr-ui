import { NgModule } from '@angular/core';
import {SharedModule} from '@shared/shared.module';
import {AdminSummaryRoutingModule} from '@pages/admin/admin-summary/admin-summary-routing.module';
import { AdminSummaryEmpDelegComponent } from './admin-summary-emp-deleg/admin-summary-emp-deleg.component';
import { AdminSummaryDateDelegComponent } from './admin-summary-date-deleg/admin-summary-date-deleg.component';
import { AdminSummaryDateVacComponent } from './admin-summary-date-vac/admin-summary-date-vac.component';
import { AdminSummaryEmpVacComponent } from './admin-summary-emp-vac/admin-summary-emp-vac.component';

@NgModule({
  declarations: [AdminSummaryEmpDelegComponent, AdminSummaryDateDelegComponent, AdminSummaryDateVacComponent, AdminSummaryEmpVacComponent],
  providers: [],
  imports: [
    SharedModule, AdminSummaryRoutingModule
  ]
})
export class AdminSummaryModule { }
