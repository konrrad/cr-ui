import {Component, OnInit} from '@angular/core';
import {VacationStatus} from '@pages/vacations/vacation-employee-view/vacation-employee-view.component';
import {AdminVacationsService} from '@pages/admin/admin-vacations/admin-vacations.service';
import {Observable} from 'rxjs';
import {TableSortingService} from '@shared/sorting-service/table-sorting.service';

@Component({
  selector: 'app-holiday-adminview',
  templateUrl: './admin-vacations.component.html',
  styleUrls: ['./admin-vacations.component.scss']
})
export class AdminVacationsComponent implements OnInit {
  holidays: Array<VacationAdminResponse>;
  statuses = VacationStatus;

  constructor(private holidayAdminviewService: AdminVacationsService,
              private tableSortingService: TableSortingService) {
  }

  ngOnInit(): void {
    this.getVacations();
    this.tableSortingService.setSorting();
  }

  getVacations(): void {
    this.holidayAdminviewService.getAllHolidays().subscribe(
      (list: Array<VacationAdminResponse>) => {
        this.holidays = list;
        Observable.bind(this.holidays);
      }
    );
  }

  changeStatus(id: string, oldStatus: VacationStatus, newStatus: VacationStatus, event): void {
    if (oldStatus !== newStatus) {
      this.holidayAdminviewService.sendHolidaysDecision(new HolidaysDecision(id, newStatus));

      this.getVacations();
      Observable.bind(this.holidays);
    }
  }

}

interface VacationAdminResponse{
  id?: string;
  startDate?: Date;
  endDate?: Date;
  vacationType?: string;
  reason?: string;
  status?: VacationStatus;
  employeeName?: string;
  employeeSurname?: string;
  employeeEmail?: string;
}

export class HolidaysDecision {
  constructor(public id?: string, public status?: VacationStatus) {
  }
}
