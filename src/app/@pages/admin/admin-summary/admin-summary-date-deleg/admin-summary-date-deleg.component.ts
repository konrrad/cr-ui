import { Component, OnInit } from '@angular/core';
import {AdminSummaryDateDelegService} from '@pages/admin/admin-summary/admin-summary-date-deleg/admin-summary-date-deleg.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-admin-summary-date-deleg',
  templateUrl: './admin-summary-date-deleg.component.html',
  styleUrls: ['./admin-summary-date-deleg.component.scss']
})
export class AdminSummaryDateDelegComponent implements OnInit {
  delegationStartDays: Array<DelegationStartDateResponse>;

  constructor(private adminSummaryDateDelegService: AdminSummaryDateDelegService) { }

  ngOnInit(): void {
    this.getDelegationStartDays();
  }

  getDelegationStartDays(): void{
    this.adminSummaryDateDelegService.getDelegationsStartDatesStatistics().subscribe(
      (list: Array<DelegationStartDateResponse>) => {
        this.delegationStartDays = list;
        Observable.bind(this.delegationStartDays);
      }
    );
  }
}

interface DelegationStartDateResponse{
  startDate?: Date;
  numberOfDelegations?: number;
  numberOfDays?: number;
}
