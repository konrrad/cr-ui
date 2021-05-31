import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from '@core/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminBonusesHistoryService {

  constructor(private http: HttpClient, private auth: AuthService) { }

  getBonusesHistory(employeeID: string): Observable<any>{
    const bonusesURL = '/api/bonus/' + employeeID + '/history';
    const header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    header.append('Authorization', this.auth.getBasicAuth());

    const httpOptions = {
      headers: header,
    };

    return this.http.get(bonusesURL, httpOptions);
  }
}
