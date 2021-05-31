import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from '@core/auth/auth.service';
import {ContractData} from '@pages/admin/admin-contract-gen/admin-contract-gen.component';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  constructor(private httpClient: HttpClient, private auth: AuthService) { }

  getContract(contractData: ContractData): Observable<Blob>
  {
    const header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    header.append('Authorization', this.auth.getBasicAuth());

    const httpOptions = {
      responseType: 'blob' as 'json',
      headers: header
    };
    return this.httpClient.post<Blob>('/api/doc/contract', contractData, httpOptions);
  }
}
