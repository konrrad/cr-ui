import {Component, OnInit} from '@angular/core';
import {ContractService} from '@pages/admin/admin-contract-gen/contract.service';
import {Employee} from '@pages/admin/admin-employees/admin-employees.component';
import {AdminEmployeesService} from '@pages/admin/admin-employees/admin-employees.service';
import {DatePipe} from '@angular/common';
import {EmployeeContractsService} from '@pages/admin/admin-employees-contracts/admin-employees-contracts.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-admin-contract-gen',
  templateUrl: './admin-contract-gen.component.html',
  styleUrls: ['./admin-contract-gen.component.scss'],
  providers: [DatePipe]
})
export class AdminContractGenComponent implements OnInit {
  employees: Array<Employee> = new Array<Employee>();
  city = 'Kraków';
  selectedEmployee;
  auxEmpData: string;
  conditions: string;
  isHidden = true;
  visibilitySubscription: Subscription;

  constructor(private contractService: ContractService,
              private employeeService: AdminEmployeesService,
              private datePipe: DatePipe,
              private employeeContractsService: EmployeeContractsService) {
    this.visibilitySubscription = this.employeeContractsService.getContractGeneratorEvent().subscribe((isHidden: boolean) => {
      this.isHidden = isHidden;
    });
  }

  ngOnInit(): void {
    this.getEmployees();
  }


  onSubmit(): void {
    const contractData: ContractData = {
      companyName: 'COMPANY NAME',
      cityDate: this.datePipe.transform(new Date(), 'yyyy/MM/dd', ).toString() + ', ' + this.city,
      employeeName: this.selectedEmployee.name + ' ' + this.selectedEmployee.surname,
      employeeData: this.auxEmpData,
      conditions: this.conditions
    };
    this.contractService.getContract(contractData).subscribe((dataBlob) => {
      console.log('SUBMIT');
      console.log(contractData.conditions);
      const blob = new Blob([dataBlob], {type: 'application/pdf'});
      const fileUrl = URL.createObjectURL(blob);
      window.open(fileUrl);
    });

  }

  private getEmployees(): void{
    this.employeeService.getEmployees().subscribe(
      (list: Array<Employee>) => {
        this.employees = list;
        this.selectedEmployee = list[0];
        console.log(this.employees);
      }
    );
  }
}

export interface ContractData {
  companyName?: string;
  cityDate?: string;
  employeeName?: string;
  employeeData?: string;
  conditions?: string;
}
