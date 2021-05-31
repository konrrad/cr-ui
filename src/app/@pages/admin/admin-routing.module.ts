import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './admin.component';
import {NgModule} from '@angular/core';
import {AdminVacationsComponent} from './admin-vacations/admin-vacations.component';
import {AdminDelegComponent} from './admin-deleg/admin-deleg.component';
import {AdminEmployeesComponent} from './admin-employees/admin-employees.component';
import {AdminContractGenComponent} from './admin-contract-gen/admin-contract-gen.component';
import {AdminEmployeesContractsComponent} from '@pages/admin/admin-employees-contracts/admin-employees-contracts.component';
import {AuthAdminGuard} from '@core/auth/auth-admin.guard';

const routes: Routes = [
  {path: '', component: AdminComponent},
  {path: 'vacations', component: AdminVacationsComponent},
  {path: 'delegations', component: AdminDelegComponent},
  {path: 'employees', component: AdminEmployeesComponent},
  {
    path: 'summary',
    loadChildren: () => import('@pages/admin/admin-summary/admin-summary.module').then(m => m.AdminSummaryModule),
    canLoad: [AuthAdminGuard]
  },
  {path: 'contracts', component: AdminEmployeesContractsComponent},
  {path: 'contract-gen', component: AdminContractGenComponent},
  {
    path: 'salaries',
    loadChildren: () => import('@pages/admin/admin-salaries/admin-salaries.module').then(m => m.AdminSalariesModule),
    canLoad: [AuthAdminGuard]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class AdminRoutingModule {
}
