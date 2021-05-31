import {Component, OnInit} from '@angular/core';
import {DelegationStatus} from '@pages/delegations/deleg-employee-view/deleg-employee-view.component';
import {AdminDelegService} from '@pages/admin/admin-deleg/admin-deleg.service';
import {Observable} from 'rxjs';
import {TableSortingService} from '@shared/sorting-service/table-sorting.service';

@Component({
  selector: 'app-deleg-adminview',
  templateUrl: './admin-deleg.component.html',
  styleUrls: ['./admin-deleg.component.scss']
})
export class AdminDelegComponent implements OnInit {
  delegations: Array<DelegationAdminResponse>;
  statuses = DelegationStatus;

  constructor(private delegAdminviewService: AdminDelegService,
              private tableSortingService: TableSortingService) { }

  ngOnInit(): void {
    this.getDelegations();
    this.tableSortingService.setSorting();
  }

  getDelegations(): void{
    this.delegAdminviewService.getAllDelegations().subscribe(
      (list: Array<DelegationAdminResponse>) => {
        this.delegations = list;
        Observable.bind(this.delegations);
      }
    );
  }

  changeStatus(id: string, oldStatus: DelegationStatus, newStatus: DelegationStatus, event): void{
    if (oldStatus !== newStatus){
      this.delegAdminviewService.sendDelegationDecision(new DelegationDecision(id, newStatus));

      this.getDelegations();
      Observable.bind(this.delegations);
    }
  }

}

interface DelegationAdminResponse{
  id?: string;
  startDate?: Date;
  endDate?: Date;
  reason?: string;
  status?: DelegationStatus;
  employeeName?: string;
  employeeSurname?: string;
  employeeEmail?: string;
}

export class DelegationDecision{
  constructor(public id?: string, public status?: DelegationStatus) {
  }
}
