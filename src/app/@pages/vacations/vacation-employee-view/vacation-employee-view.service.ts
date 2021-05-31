import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from '@core/auth/auth.service';
import {Observable} from 'rxjs';
import {VacationDays} from '@pages/vacations/vacation-employee-view/vacation-employee-view.component';

@Injectable({
  providedIn: 'root'
})
export class VacationEmployeeViewService {
  constructor(private http: HttpClient, private auth: AuthService) { }

  getVacations(): Observable<any>{
    const userId = this.auth.getUserId();
    const vacationsListURL = '/api/vacation/' + userId + '/list';
    const header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    header.append('Authorization', this.auth.getBasicAuth());

    const httpOptions = {
      headers: header
    };

    return this.http.get(vacationsListURL, httpOptions);
  }

  getDays(): Observable<VacationDays>{
    const userId = this.auth.getUserId();
    const vacationsDaysURL = '/api/vacation/' + userId + '/days';
    const header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    header.append('Authorization', this.auth.getBasicAuth());

    const httpOptions = {
      headers: header
    };

    return this.http.get(vacationsDaysURL, httpOptions);
  }
}
