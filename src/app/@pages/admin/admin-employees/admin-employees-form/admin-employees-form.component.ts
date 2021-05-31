import { Component } from '@angular/core';
import { AdminEmployeesService } from '@pages/admin/admin-employees/admin-employees.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-employees-form',
  templateUrl: './admin-employees-form.component.html',
  styleUrls: ['./admin-employees-form.component.scss']
})
export class AdminEmployeesFormComponent {

  constructor(private adminEmployeesService: AdminEmployeesService) {
    this.changeVisibilitySubscription = this.adminEmployeesService.getFormVisibilityEvent().subscribe((employee: Employee) => {
      if (employee === null) {
        this.employee = this.emptyEmployee;
      } else {
        console.log(this.employee);
        this.employee = employee;
      }
      this.showEmployeeEditForm();
    });
  }
  changeVisibilitySubscription: Subscription;
  emptyEmployee: Employee = {
    email: '', name: '', password: '', surname: '', administrator: false
  };
  employee: Employee = {
    email: '', name: '', password: '', surname: '', administrator: false
  };

  public isHidden = true;

  private showEmployeeEditForm(): void {
    this.isHidden = false;
  }

  public addEditEmployee(): void {
    if (!this.employee.id) {
      this.adminEmployeesService.addEmployee(this.employee);
    } else {
      this.adminEmployeesService.editEmployee(this.employee);
    }
    this.isHidden = true;
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


