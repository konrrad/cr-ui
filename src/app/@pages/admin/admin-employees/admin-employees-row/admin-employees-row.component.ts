import { Component, Input } from '@angular/core';
import { AdminEmployeesService } from '@pages/admin/admin-employees/admin-employees.service';

@Component({
  selector: 'app-admin-employees-row',
  templateUrl: './admin-employees-row.component.html',
  styleUrls: ['./admin-employees-row.component.scss']
})
export class AdminEmployeesRowComponent {

  constructor(private adminEmployeesFormService: AdminEmployeesService) { }

  @Input() employee: Employee;

  public showEmployeeEditForm(): void{
    this.adminEmployeesFormService.showEmployeeEditForm(this.employee);
  }

  public deleteEmployee(): void{
    this.adminEmployeesFormService.deleteEmployee(this.employee);
  }
}

interface Employee{
  id?: string;
  name?: string;
  surname?: string;
  email?: string;
  isAdministrator?: boolean;
}


