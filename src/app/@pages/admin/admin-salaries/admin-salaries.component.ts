import { Component, OnInit } from '@angular/core';
import {AdminSalariesService} from '@pages/admin/admin-salaries/admin-salaries.service';
import {TableSortingService} from '@shared/sorting-service/table-sorting.service';

@Component({
  selector: 'app-admin-salaries',
  templateUrl: './admin-salaries.component.html',
  styleUrls: ['./admin-salaries.component.scss']
})
export class AdminSalariesComponent implements OnInit {
  employees: Array<Employee> = new Array<Employee>();
  employeeID: string;
  salaryData: SalaryData;
  currentSalary: Salary;
  salaryHistoryVisible: boolean;
  bonusesHistoryVisible: boolean;

  constructor(private adminSalariesService: AdminSalariesService, private tableSortingService: TableSortingService) {
    adminSalariesService.onRequestEmpID().subscribe(
      () => this.adminSalariesService.changeEmployeeInfo(this.employeeID)
    );
    adminSalariesService.onSalaryBonusesChange().subscribe(
      () => this.updateEmployeeSalaryInfo(this.employeeID)
    );
  }

  ngOnInit(): void {
    this.getEmployees();
    this.tableSortingService.setSorting();
    this.employeeID = this.adminSalariesService.getAdminID();
    this.updateEmployeeSalaryInfo(this.employeeID);
  }

  private getEmployees(): void{
    this.adminSalariesService.getEmployees().subscribe(
      (list: Array<Employee>) => {
        this.employees = list;
      }
    );
  }

  public updateEmployeeSalaryInfo(employeeID: string): void{
    this.adminSalariesService.getSalaryData(employeeID).subscribe(
      (salaryData: SalaryData) => {
        this.salaryData = salaryData;
        this.salaryData.percent = (this.salaryData.bonusesUsed / this.salaryData.bonusesTotal) * 100;
        this.currentSalary = salaryData.salaryObject;
      }
    );

    this.employeeID = employeeID;
    this.adminSalariesService.changeEmployeeInfo(employeeID);
  }

  public showSalaryForm(salary: Salary): void{
    this.adminSalariesService.showSalaryForm(salary);
  }

  public showBonusForm(): void {
    this.adminSalariesService.showBonusForm();
  }

  public changeSalaryHistoryVisibility(): void{
    this.salaryHistoryVisible = !this.salaryHistoryVisible;
  }

  public changeBonusesHistoryVisibility(): void{
    this.bonusesHistoryVisible = !this.bonusesHistoryVisible;
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

interface SalaryData {
  name?: string;
  surname?: string;
  salary?: number;
  salaryObject?: Salary;
  bonusesTotal?: number;
  bonusesUsed?: number;
  percent?: number;
}

export interface Salary{
  id?: string;
  salary?: number;
  startDate?: string;
  endDate?: string;
}

export interface Bonus {
  id?: string;
  percent?: number;
  amount?: number;
  date?: string;
}
