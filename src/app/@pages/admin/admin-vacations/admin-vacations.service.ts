import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from '@core/auth/auth.service';
import {Observable} from 'rxjs';
import {HolidaysDecision} from '@pages/admin/admin-vacations/admin-vacations.component';

@Injectable({
  providedIn: 'root'
})
export class AdminVacationsService {
  constructor(private http: HttpClient, private auth: AuthService) { }

  getAllHolidays(): Observable<any>{
    const holidaysURL = '/api/vacation/admin';
    const header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    header.append('Authorization', this.auth.getBasicAuth());

    const httpOptions = {
      headers: header
    };

    return this.http.get(holidaysURL, httpOptions);
  }

  sendHolidaysDecision(holidaysDecision: HolidaysDecision): void{
    const holidaysURL = '/api/vacation/decision';
    const header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    header.append('Authorization', this.auth.getBasicAuth());

    const httpOptions = {
      headers: header
    };

    this.http.post<HolidaysDecision>(holidaysURL, holidaysDecision, httpOptions).subscribe();
  }
}
