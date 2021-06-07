import { Component } from '@angular/core';
import {SalaryBonusesService} from '@pages/salary-bonuses/salary-bonuses.service';

@Component({
  selector: 'app-bonus-add',
  templateUrl: './bonus-add.component.html',
  styleUrls: ['./bonus-add.component.scss']
})
export class BonusAddComponent {
  bonus: Bonus = new Bonus();

  constructor(private salaryBonusesService: SalaryBonusesService) {
    this.getBonus();
  }

  private getBonusesHistory(): void {
    this.salaryBonusesService.getBonus().subscribe(
      (bonus: Bonus) => {
        this.bonus = bonus;
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
