import {NgModule} from '@angular/core';
import {SharedModule} from '@shared/shared.module';
import {AdminRoutingModule} from './admin-routing.module';
import {AdminEmployeesComponent} from './admin-employees/admin-employees.component';
import {AdminDelegComponent} from './admin-deleg/admin-deleg.component';
import {AdminVacationsComponent} from './admin-vacations/admin-vacations.component';
import {AdminComponent} from './admin.component';
import {AdminEmployeesRowComponent} from './admin-employees/admin-employees-row/admin-employees-row.component';
import {AdminEmployeesFormComponent} from './admin-employees/admin-employees-form/admin-employees-form.component';
import {AdminContractGenComponent} from './admin-contract-gen/admin-contract-gen.component';
import {ReactiveFormsModule} from '@angular/forms';
import { AdminSummaryComponent } from './admin-summary/admin-summary.component';
import { AdminEmployeesContractsComponent } from './admin-employees-contracts/admin-employees-contracts.component';
import { AdminEmployeesContractsRowComponent } from './admin-employees-contracts/admin-employees-contracts-row/admin-employees-contracts-row.component';
import { AdminEmployeesContractsAllComponent } from './admin-employees-contracts/admin-employees-contracts-all/admin-employees-contracts-all.component';

@NgModule({
  declarations: [
    AdminEmployeesComponent,
    AdminDelegComponent,
    AdminVacationsComponent,
    AdminComponent,
    AdminEmployeesRowComponent,
    AdminEmployeesFormComponent,
    AdminContractGenComponent,
    AdminSummaryComponent,
    AdminEmployeesContractsComponent,
    AdminEmployeesContractsRowComponent,
    AdminEmployeesContractsAllComponent
  ],
  providers: [],
  imports: [SharedModule, AdminRoutingModule, ReactiveFormsModule]
})
export class AdminModule {

}
