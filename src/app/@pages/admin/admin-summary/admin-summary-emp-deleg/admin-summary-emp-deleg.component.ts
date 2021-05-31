import { Component, OnInit } from '@angular/core';
import {AdminSummaryEmpDelegService} from '@pages/admin/admin-summary/admin-summary-emp-deleg/admin-summary-emp-deleg.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-admin-summary-emp-deleg',
  templateUrl: './admin-summary-emp-deleg.component.html',
  styleUrls: ['./admin-summary-emp-deleg.component.scss']
})
export class AdminSummaryEmpDelegComponent implements OnInit {
  delegationEmployees: Array<DelegationEmployeeResponse>;

  constructor(private adminSummaryEmpDelegService: AdminSummaryEmpDelegService) { }

  ngOnInit(): void {
    this.getDelegationEmployees();
  }

  getDelegationEmployees(): void{
    this.adminSummaryEmpDelegService.getDelegationEmployeesStatistics().subscribe(
      (list: Array<DelegationEmployeeResponse>) => {
        this.delegationEmployees = list;
        Observable.bind(this.delegationEmployees);
      }
    );
  }
}

interface DelegationEmployeeResponse{
  employeeName?: string;
  employeeSurname?: string;
  employeeEmail?: string;
  numberOfDelegations?: number;
  numberOfDays?: number;
}
