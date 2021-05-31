import { Component } from '@angular/core';
import {SalaryBonusesService} from '@pages/salary-bonuses/salary-bonuses.service';
import {Options} from '@vaseap/ng-material-treetable';

@Component({
  selector: 'app-salary-history',
  templateUrl: './salary-history.component.html',
  styleUrls: ['./salary-history.component.scss']
})
export class SalaryHistoryComponent {
  constructor(private salaryBonusesService: SalaryBonusesService) {
    salaryBonusesService.getAll().subscribe((result) => console.log(result));
  }

  salaries$ = this.salaryBonusesService.getAll();

  opts: Options<any> = {
    customColumnOrder: ['startDate', 'endDate', 'salary', 'id'],
    capitalisedHeader: true,
  };
}

