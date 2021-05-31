import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from '@core/auth/auth.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VacationDocService {

  constructor(private httpClient: HttpClient, private auth: AuthService) {
  }

  getContract(vacationId: string): Observable<Blob> {
    const header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    header.append('Authorization', this.auth.getBasicAuth());

    const httpOptions = {
      responseType: 'blob' as 'json',
      headers: header
    };
    return this.httpClient.get<Blob>('/api/doc/vacation/' + vacationId, httpOptions);
  }
}
