import { Component } from '@angular/core';
import {SalaryBonusesService} from '@pages/salary-bonuses/salary-bonuses.service';

@Component({
  selector: 'app-bonuses-history',
  templateUrl: './bonuses-history.component.html',
  styleUrls: ['./bonuses-history.component.scss']
})
export class BonusesHistoryComponent {
  bonusesHistory: Array<Bonus> = new Array<Bonus>();

  constructor(private salaryBonusesService: SalaryBonusesService) {
    this.getBonusesHistory();
  }

  private getBonusesHistory(): void {
    this.salaryBonusesService.getBonusesHistory().subscribe(
      (bonusesHistory: Array<Bonus>) => {
        this.bonusesHistory = bonusesHistory;
      }
    );
  }
}

interface Bonus {
  id?: string;
  percent?: number;
  amount?: number;
  date?: string;
}
