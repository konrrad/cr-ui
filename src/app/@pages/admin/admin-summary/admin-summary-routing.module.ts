import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminSummaryComponent} from '@pages/admin/admin-summary/admin-summary.component';
import {AdminSummaryEmpDelegComponent} from '@pages/admin/admin-summary/admin-summary-emp-deleg/admin-summary-emp-deleg.component';
import {AdminSummaryDateDelegComponent} from '@pages/admin/admin-summary/admin-summary-date-deleg/admin-summary-date-deleg.component';
import {AdminSummaryEmpVacComponent} from '@pages/admin/admin-summary/admin-summary-emp-vac/admin-summary-emp-vac.component';
import {AdminSummaryDateVacComponent} from '@pages/admin/admin-summary/admin-summary-date-vac/admin-summary-date-vac.component';

const routes: Routes = [
  {path: '', component: AdminSummaryComponent},
  {path: 'emp-deleg', component: AdminSummaryEmpDelegComponent},
  {path: 'emp-vac', component: AdminSummaryEmpVacComponent},
  {path: 'date-deleg', component: AdminSummaryDateDelegComponent},
  {path: 'date-vac', component: AdminSummaryDateVacComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminSummaryRoutingModule { }
