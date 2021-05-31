import {NgModule} from '@angular/core';
import {SharedModule} from '../../@shared/shared.module';
import {VacationsRoutingModule} from './vacations-routing.module';
import {VacationApplicationComponent} from './vacation-application/vacation-application.component';
import {VacationsComponent} from './vacations.component';
import {VacationEmployeeViewComponent} from './vacation-employee-view/vacation-employee-view.component';

@NgModule({
  declarations: [
    VacationApplicationComponent,
    VacationsComponent,
    VacationEmployeeViewComponent],
  imports: [
    VacationsRoutingModule,
    SharedModule]
})
export class VacationsModule {
}
