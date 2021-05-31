import { Component, OnInit } from '@angular/core';
import {EmployeeContractsService} from '@pages/admin/admin-employees-contracts/admin-employees-contracts.service';
import {TableSortingService} from '@shared/sorting-service/table-sorting.service';

@Component({
  selector: 'app-admin-employees-contracts',
  templateUrl: './admin-employees-contracts.component.html',
  styleUrls: ['./admin-employees-contracts.component.scss']
})
export class AdminEmployeesContractsComponent implements OnInit {

  employeesWithContract: Array<EmployeeWithContract> = new Array<EmployeeWithContract>();

  constructor(private employeeContractsService: EmployeeContractsService,
              private tableSortingService: TableSortingService) { }

  ngOnInit(): void {
    this.updateEmployees();
    this.tableSortingService.setSorting();
  }

  private updateEmployees(): void{
    this.employeeContractsService.getEmployeesWithContracts().subscribe(
      (list: Array<EmployeeWithContract>) => {
        this.employeesWithContract = list;
      }
    );
  }

  public showContractGenerator(): void{
    this.employeeContractsService.showContractGenerator(false);
  }
}

interface EmployeeWithContract{
  id?: string;
  name?: string;
  surname?: string;
  email?: string;
  startDate?: string;
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
