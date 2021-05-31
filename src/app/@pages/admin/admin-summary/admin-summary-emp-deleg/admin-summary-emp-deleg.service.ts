import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from '@core/auth/auth.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminSummaryEmpDelegService {

  constructor(private http: HttpClient, private auth: AuthService ) { }

  getDelegationEmployeesStatistics(): Observable<any>{
    const employeesURL = '/api/summary/delegations/employees';
    const header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    header.append('Authorization', this.auth.getBasicAuth());

    const httpOptions = {
      headers: header
    };

    return this.http.get(employeesURL, httpOptions);
  }
}
