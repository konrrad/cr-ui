import {NgModule} from '@angular/core';
import {DelegationsRoutingModule} from './delegations-routing.module';
import {SharedModule} from '../../@shared/shared.module';
import {DelegationsComponent} from './delegations.component';
import {DelegApplicationComponent} from './deleg-application/deleg-application.component';
import {DelegEmployeeViewComponent} from './deleg-employee-view/deleg-employee-view.component';

@NgModule({
  declarations: [
    DelegationsComponent,
    DelegApplicationComponent,
    DelegEmployeeViewComponent],
  imports: [DelegationsRoutingModule, SharedModule]
})
export class DelegationsModule {
}
