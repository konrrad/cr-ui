import { Component, OnInit } from '@angular/core';
import {SalaryBonusesService} from '@pages/salary-bonuses/salary-bonuses.service';

@Component({
  selector: 'app-salary-bonuses',
  templateUrl: './salary-bonuses.component.html',
  styleUrls: ['./salary-bonuses.component.scss']
})
export class SalaryBonusesComponent {
  salaryData: SalaryData;
  salaryHistoryVisible = false;
  bonusesHistoryVisible = false;

  constructor(private salaryBonusesService: SalaryBonusesService) {
    this.setSalaryData();
  }

  private setSalaryData(): void {
    this.salaryBonusesService.getSalaryData().subscribe(
      (salaryData: SalaryData) => {
        this.salaryData = salaryData;
        this.salaryData.percent = (this.salaryData.bonusesUsed / this.salaryData.bonusesTotal) * 100;
      }
    );
  }

  public changeSalaryHistoryVisibility(): void {
    this.salaryHistoryVisible = !this.salaryHistoryVisible;
  }

  public changeBonusesHistoryVisibility(): void {
    this.bonusesHistoryVisible = !this.bonusesHistoryVisible;
  }
}

interface SalaryData {
  name?: string;
  surname?: string;
  salary?: number;
  bonusesTotal?: number;
  bonusesUsed?: number;
  percent?: number;
}
