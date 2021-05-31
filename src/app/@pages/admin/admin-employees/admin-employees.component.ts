import { Component, OnInit } from '@angular/core';
import {AdminEmployeesService} from '@pages/admin/admin-employees/admin-employees.service';
import {TableSortingService} from '@shared/sorting-service/table-sorting.service';

@Component({
  selector: 'app-admin-employees',
  templateUrl: './admin-employees.component.html',
  styleUrls: ['./admin-employees.component.scss']
})
export class AdminEmployeesComponent implements OnInit {
  employees: Array<Employee> = new Array<Employee>();

  constructor(private adminEmployeesService: AdminEmployeesService,
              private tableSortingService: TableSortingService) { }

  ngOnInit(): void {
    this.updateEmployees();
    this.tableSortingService.setSorting();
  }

  private updateEmployees(): void{
    this.adminEmployeesService.getEmployees().subscribe(
      (list: Array<Employee>) => {
        this.employees = list;
      }
    );
  }

  public showEmployeeEditForm(): void{
    this.adminEmployeesService.showEmployeeEditForm(null);
  }
}

export interface Employee{
  id?: string;
  name?: string;
  surname?: string;
  email?: string;
  password?: string;
  administrator?: boolean;
}

