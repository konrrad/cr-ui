import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminSalariesComponent} from '@pages/admin/admin-salaries/admin-salaries.component';

const routes: Routes = [
  {path: '', component: AdminSalariesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminSalariesRoutingModule { }
