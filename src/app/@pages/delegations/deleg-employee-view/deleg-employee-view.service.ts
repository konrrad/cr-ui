import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from '@core/auth/auth.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DelegEmployeeViewService {
  constructor(private http: HttpClient, private auth: AuthService) { }

  getDelegations(): Observable<any>{
    const userId = this.auth.getUserId();
    const delegationsURL = '/api/delegation/' + userId;
    const header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    header.append('Authorization', this.auth.getBasicAuth());

    const httpOptions = {
      headers: header
    };

    return this.http.get(delegationsURL, httpOptions);
  }
}
