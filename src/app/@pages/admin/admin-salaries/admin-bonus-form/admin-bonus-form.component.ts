import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {AdminSalariesService} from '@pages/admin/admin-salaries/admin-salaries.service';
import {Bonus} from '@pages/admin/admin-salaries/admin-salaries.component';

@Component({
  selector: 'app-admin-bonus-form',
  templateUrl: './admin-bonus-form.component.html',
  styleUrls: ['./admin-bonus-form.component.scss']
})
export class AdminBonusFormComponent implements OnInit {
  isHidden = true;
  bonus: Bonus = {
    percent: 0, amount: 0, date: ''
  };
  emptyBonus: Bonus = {
    percent: 0, amount: 0, date: ''
  };
  employeeID: string;
  changeVisibilitySubscription: Subscription;
  employeeSubscription: Subscription;

  constructor(private adminSalariesService: AdminSalariesService) {
    this.changeVisibilitySubscription = this.adminSalariesService.onBonusFormVisibilityEvent().subscribe(
      () => {
        this.bonus = this.emptyBonus;
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

  addBonus(): void {
    this.adminSalariesService.addBonus(this.bonus, this.employeeID);
    this.isHidden = true;
  }
}
