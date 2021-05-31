import {Component, OnInit} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {AuthService} from '@core/auth/auth.service';
import {DelegAppService} from './deleg-app.service';


@Component({
  selector: 'app-deleg-application',
  templateUrl: './deleg-application.component.html',
  styleUrls: ['./deleg-application.component.scss']
})
export class DelegApplicationComponent implements OnInit {
  delegationApplication: DelegationApplication = {
    employeeId: this.auth.getUserId()
  };


  constructor(private auth: AuthService, private delegAppService: DelegAppService) {
  }

  ngOnInit(): void {
  }

  handleError(error: HttpErrorResponse): Observable<any> {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');

  }


  onSubmit(): void {
    this.delegAppService.sendDelegation(this.delegationApplication);
  }
}

export interface DelegationApplication {
  employeeId?: string;
  startDate?: Date;
  endDate?: Date;
  reason?: string;
}


