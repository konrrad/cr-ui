import { Component, OnInit } from '@angular/core';
import {AuthService} from '@core/auth/auth.service';
import {VacationEmployeeViewService} from '@pages/vacations/vacation-employee-view/vacation-employee-view.service';
import {VacationDocService} from '@pages/vacations/vacation-employee-view/vacation-doc.service';
import {TableSortingService} from '@shared/sorting-service/table-sorting.service';

@Component({
  selector: 'app-vacation-employee-view',
  templateUrl: './vacation-employee-view.component.html',
  styleUrls: ['./vacation-employee-view.component.scss']
})
export class VacationEmployeeViewComponent implements OnInit {
  vacations: Array<Vacation> = new Array<Vacation>();
  totalDays: number;
  usedDays: number;

  constructor(private authService: AuthService,
              private vacationEmployeeViewService: VacationEmployeeViewService,
              private vacationDocService: VacationDocService,
              private tableSortingService: TableSortingService) { }

  ngOnInit(): void {
    this.updateVacations();
    this.updateDays();
    this.tableSortingService.setSorting();
  }

  private updateVacations(): void{
    this.vacationEmployeeViewService.getVacations().subscribe(
      (list: Array<Vacation>) => {
        this.vacations = list;
      }
    );
  }

  private updateDays(): void{
    this.vacationEmployeeViewService.getDays().subscribe(
      (days: VacationDays) => {
        this.totalDays = days.totalVacationDays;
        this.usedDays = days.vacationDaysUsed;
      }
    );
  }

  generateDocument(id: string, $event: MouseEvent): void {
    this.vacationDocService.getContract(id).subscribe((dataBlob) => {
      const blob = new Blob([dataBlob], {type: 'application/pdf'});
      const fileUrl = URL.createObjectURL(blob);
      window.open(fileUrl);
    });
  }
}

interface Vacation{
  id?: string;
  startDate?: Date;
  endDate?: Date;
  vacationType?: string;
  reason?: string;
  status?: VacationStatus;
}

export enum VacationStatus{
  PENDING = 'PENDING', ACCEPTED = 'ACCEPTED', REJECTED = 'REJECTED'
}

export interface VacationDays {
  totalVacationDays?: number;
  vacationDaysUsed?: number;
}
