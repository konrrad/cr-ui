import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {AdminSalariesService} from '@pages/admin/admin-salaries/admin-salaries.service';
import {AdminBonusesHistoryService} from '@pages/admin/admin-salaries/admin-bonuses-history/admin-bonuses-history.service';
import {TableSortingService} from '@shared/sorting-service/table-sorting.service';
import {Bonus} from '@pages/admin/admin-salaries/admin-salaries.component';

@Component({
  selector: 'app-admin-bonuses-history',
  templateUrl: './admin-bonuses-history.component.html',
  styleUrls: ['./admin-bonuses-history.component.scss']
})
export class AdminBonusesHistoryComponent implements OnInit {
  bonuses: Array<Bonus>;
  employeeSubscriber: Subscription;

  constructor(private adminSalariesService: AdminSalariesService, private adminBonusesHistoryService: AdminBonusesHistoryService,
              private tableSortingService: TableSortingService) {
    this.employeeSubscriber = adminSalariesService.onChangeEmployeeInfo().subscribe(
      employeeID => adminBonusesHistoryService.getBonusesHistory(employeeID).subscribe(
        bonuses => {this.bonuses = bonuses; }
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
