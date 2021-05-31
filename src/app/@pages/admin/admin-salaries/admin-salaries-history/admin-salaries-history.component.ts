import {Component, OnInit} from '@angular/core';
import {AdminSalariesService} from '@pages/admin/admin-salaries/admin-salaries.service';
import {Subscription} from 'rxjs';
import {AdminSalariesHistoryService} from '@pages/admin/admin-salaries/admin-salaries-history/admin-salaries-history.service';
import {Salary} from '@pages/admin/admin-salaries/admin-salaries.component';
import {TableSortingService} from '@shared/sorting-service/table-sorting.service';

@Component({
  selector: 'app-admin-salaries-history',
  templateUrl: './admin-salaries-history.component.html',
  styleUrls: ['./admin-salaries-history.component.scss']
})
export class AdminSalariesHistoryComponent implements OnInit {
  salaries: Array<Salary>;
  employeeSubscriber: Subscription;

  constructor(private adminSalariesService: AdminSalariesService, private adminSalariesHistoryService: AdminSalariesHistoryService,
              private tableSortingService: TableSortingService) {
    this.employeeSubscriber = adminSalariesService.onChangeEmployeeInfo().subscribe(
      employeeID => adminSalariesHistoryService.getSalaryHistory(employeeID).subscribe(
        salaries => {this.salaries = salaries; }
      )
    );
    adminSalariesService.onSalaryBonusesChange().subscribe(
      () => this.adminSalariesService.askForEmployeeInfo()
    );
  }

  ngOnInit(): void {
    this.adminSalariesService.askForEmployeeInfo();
    this.tableSortingService.setSorting();
  }

}
