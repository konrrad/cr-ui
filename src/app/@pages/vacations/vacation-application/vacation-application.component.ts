import { Component, OnInit } from '@angular/core';
import {VacationService} from './vacation.service';
import {AuthService} from '@core/auth/auth.service';

@Component({
  selector: 'app-vacation-application',
  templateUrl: './vacation-application.component.html',
  styleUrls: ['./vacation-application.component.scss']
})
export class VacationApplicationComponent implements OnInit {
  vacationApplication: VacationApplication;
  selectedType: string;
  public vacationTypes: string[] = [];

  constructor(private vacationService: VacationService, private auth: AuthService) {
    this.vacationApplication = {
      employeeId: this.auth.getUserId()
    };
  }

  ngOnInit(): void {
    this.vacationService.getTypesOfVacations().subscribe(data => {
      this.vacationTypes = data;
    });
  }

  onSubmit(): void
  {
    this.vacationService.sendVacationRequest(this.vacationApplication).subscribe();
  }


}

export interface VacationApplication
{
  employeeId?: string;
  startDate?: Date;
  endDate?: Date;
  type?: string;
  reason?: string;
}

