import {Injectable} from '@angular/core';
import {DelegationApplication} from '@pages/delegations/deleg-application/deleg-application.component';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from '@core/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DelegAppService {

  constructor(private http: HttpClient, private auth: AuthService) {
  }

  sendDelegation(delegation: DelegationApplication): void {
    const header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    header.append('Authorization', this.auth.getBasicAuth());

    const httpOptions = {
      headers: header
    };

    this.http.post<DelegationApplication>('/api/delegation', delegation, httpOptions).subscribe();
  }

}
