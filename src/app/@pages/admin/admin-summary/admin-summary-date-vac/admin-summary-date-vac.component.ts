import { Component, OnInit } from '@angular/core';
import {AdminSummaryDateVacService} from '@pages/admin/admin-summary/admin-summary-date-vac/admin-summary-date-vac.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-admin-summary-date-vac',
  templateUrl: './admin-summary-date-vac.component.html',
  styleUrls: ['./admin-summary-date-vac.component.scss']
})
export class AdminSummaryDateVacComponent implements OnInit {
  vacationStartDays: Array<VacationStartDateResponse>;

  constructor(private adminSummaryDateVacService: AdminSummaryDateVacService) { }

  ngOnInit(): void {
    this.getVacationStartDays();
  }

  getVacationStartDays(): void{
    this.adminSummaryDateVacService.getVacationsStartDatesStatistics().subscribe(
      (list: Array<VacationStartDateResponse>) => {
        this.vacationStartDays = list;
        Observable.bind(this.vacationStartDays);
      }
    );
  }

}

interface VacationStartDateResponse{
  startDate?: Date;
  numberOfDelegations?: number;
  numberOfDays?: number;
}
