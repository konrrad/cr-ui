import { Component, OnInit } from '@angular/core';
import {AdminSummaryEmpVacService} from '@pages/admin/admin-summary/admin-summary-emp-vac/admin-summary-emp-vac.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-admin-summary-emp-vac',
  templateUrl: './admin-summary-emp-vac.component.html',
  styleUrls: ['./admin-summary-emp-vac.component.scss']
})
export class AdminSummaryEmpVacComponent implements OnInit {
  vacationsEmployees: Array<VacationEmployeeResponse>;

  constructor(private adminSummaryEmpVacService: AdminSummaryEmpVacService) { }

  ngOnInit(): void {
    this.getVacationEmployees();
  }

  getVacationEmployees(): void{
    this.adminSummaryEmpVacService.getVacationEmployeesStatistics().subscribe(
      (list: Array<VacationEmployeeResponse>) => {
        this.vacationsEmployees = list;
        Observable.bind(this.vacationsEmployees);
      }
    );
  }

}

interface VacationEmployeeResponse{
  employeeName?: string;
  employeeSurname?: string;
  employeeEmail?: string;
  numberOfDelegations?: number;
  numberOfDays?: number;
}
