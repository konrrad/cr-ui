import {Component, Input} from '@angular/core';
import {EmployeeContractsService} from '@pages/admin/admin-employees-contracts/admin-employees-contracts.service';

@Component({
  selector: 'app-admin-employees-contracts-row',
  templateUrl: './admin-employees-contracts-row.component.html',
  styleUrls: ['./admin-employees-contracts-row.component.scss']
})
export class AdminEmployeesContractsRowComponent{

  constructor(private employeeContractsService: EmployeeContractsService) { }

  @Input() employeeWithContract: EmployeeWithContract;

  public showEmployeeContracts(): void{
    this.employeeContractsService.showEmployeeContracts(this.employeeWithContract);
  }
}

interface EmployeeWithContract{
  id?: string;
  name?: string;
  surname?: string;
  email?: string;
  endDate?: string;
  type?: ContractType;
}

export enum ContractType{
  UMOWA_O_PRACE_NA_CZAS_NIEOKRESLONY = 'NA_CZAS_NIEOKRESLONY',
  UMOWA_O_PRACE_NA_CZAS_OKRESLONY = 'NA_CZAS_OKRESLONY',
  UMOWA_NA_OKRES_PROBNY = 'OKRES_PROBNY',
  UMOWA_O_DZIELO = 'UMOWA_O_DZIELO',
  UMOWA_ZLECENIE = 'UMOWA_ZLECENIE'
}
