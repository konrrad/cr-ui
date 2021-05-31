import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from '@core/auth/auth.service';
import {Observable} from 'rxjs';
import {DelegationDecision} from '@pages/admin/admin-deleg/admin-deleg.component';

@Injectable({
  providedIn: 'root'
})
export class AdminDelegService {
  constructor(private http: HttpClient, private auth: AuthService) { }

  getAllDelegations(): Observable<any>{
    const delegationsURL = '/api/delegation/admin';
    const header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    header.append('Authorization', this.auth.getBasicAuth());

    const httpOptions = {
      headers: header
    };

    return this.http.get(delegationsURL, httpOptions);
  }

  sendDelegationDecision(delegationDecision: DelegationDecision): void{
    const decisionURL = '/api/delegation/decision';
    const header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    header.append('Authorization', this.auth.getBasicAuth());

    const httpOptions = {
      headers: header
    };

    this.http.post<DelegationDecision>(decisionURL, delegationDecision, httpOptions).subscribe();
  }
}
