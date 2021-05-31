import { Component, OnInit } from '@angular/core';
import {AuthService} from '@core/auth/auth.service';
import {DelegEmployeeViewService} from '@pages/delegations/deleg-employee-view/deleg-employee-view.service';
import {Observable} from 'rxjs';
import {TableSortingService} from '@shared/sorting-service/table-sorting.service';
import {DelegationDocService} from '@pages/delegations/deleg-employee-view/delegation-doc.service';

@Component({
  selector: 'app-deleg-employee-view',
  templateUrl: './deleg-employee-view.component.html',
  styleUrls: ['./deleg-employee-view.component.scss']
})
export class DelegEmployeeViewComponent implements OnInit {
  delegations: Array<Delegation> = new Array<Delegation>();

  constructor(private authService: AuthService,
              private delegEmployeeViewService: DelegEmployeeViewService,
              private tableSrotingService: TableSortingService,
              private delegationDocService: DelegationDocService) {
  }

  ngOnInit(): void {
    this.updateDelegations();
    this.tableSrotingService.setSorting();
  }

  private updateDelegations(): void {
    this.delegEmployeeViewService.getDelegations().subscribe(
      (list: Array<Delegation>) => {
        this.delegations = list;
        Observable.bind(this.delegations);
      }
    );
  }

  generateDocument(id: string, $event: MouseEvent): void {
    this.delegationDocService.getDocument(id).subscribe((dataBlob) => {
      const blob = new Blob([dataBlob], {type: 'application/pdf'});
      const fileUrl = URL.createObjectURL(blob);
      window.open(fileUrl);
    });
  }
}

interface Delegation{
  id?: string;
  startDate?: Date;
  endDate?: Date;
  reason?: string;
  status?: DelegationStatus;
}

export enum DelegationStatus{
  PENDING = 'PENDING', ACCEPTED = 'ACCEPTED', REJECTED = 'REJECTED'
}
