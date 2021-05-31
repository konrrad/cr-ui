import { Component, OnInit } from '@angular/core';
import {Salary} from '@pages/admin/admin-salaries/admin-salaries.component';
import {AdminSalariesService} from '@pages/admin/admin-salaries/admin-salaries.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-admin-salary-form',
  templateUrl: './admin-salary-form.component.html',
  styleUrls: ['./admin-salary-form.component.scss']
})
export class AdminSalaryFormComponent implements OnInit {
  isHidden = true;
  salary: Salary = {
    startDate: '', endDate: '', salary: 0
  };
  emptySalary: Salary = {
    startDate: '', endDate: '', salary: 0
  };
  employeeID: string;
  changeVisibilitySubscription: Subscription;
  employeeSubscription: Subscription;

  constructor(private adminSalariesService: AdminSalariesService) {
    this.changeVisibilitySubscription = this.adminSalariesService.onSalaryFormVisibilityEvent().subscribe(
      salary => {
        if (salary === null){
          this.salary = this.emptySalary;
        }
        else {
          this.salary = salary;
        }
        this.adminSalariesService.askForEmployeeInfo();
        this.isHidden = false;
      }
    );

    this.employeeSubscription = this.adminSalariesService.onChangeEmployeeInfo().subscribe(
      employeeID => {
        this.employeeID = employeeID;
      }
    );
  }

  ngOnInit(): void {
  }

  addEditSalary(): void {
    if (!this.salary.id){
      this.adminSalariesService.addSalary(this.salary, this.employeeID);
    }
    else{
      this.adminSalariesService.editSalary(this.salary);
    }
    this.isHidden = true;
  }
}
