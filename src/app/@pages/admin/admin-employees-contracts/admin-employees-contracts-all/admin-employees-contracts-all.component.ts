import { Component } from '@angular/core';
import {Subscription} from 'rxjs';
import {EmployeeContractsService} from '@pages/admin/admin-employees-contracts/admin-employees-contracts.service';

@Component({
  selector: 'app-admin-employees-contracts-all',
  templateUrl: './admin-employees-contracts-all.component.html',
  styleUrls: ['./admin-employees-contracts-all.component.scss']
})
export class AdminEmployeesContractsAllComponent {
  public isHidden = true;
  private contractsSubscription: Subscription;
  public contracts: Array<Contract> = new Array<Contract>();

  constructor(private employeeContractsService: EmployeeContractsService) {
    this.contractsSubscription = this.employeeContractsService.getContractsEvent().subscribe((contracts: Array<Contract>) => {
      this.contracts = contracts;
      this.showTable();
    });
  }

  private showTable(): void {
    if (this.isHidden) {
      this.isHidden = !this.isHidden;
    }
  }
}

interface Contract{
  id?: string;
  name?: string;
  surname?: string;
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
