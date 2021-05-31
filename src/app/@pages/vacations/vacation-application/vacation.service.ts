import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from '@core/auth/auth.service';
import {VacationApplication} from './vacation-application.component';

@Injectable({
  providedIn: 'root'
})
export class VacationService {


  httpOptions: any;

  constructor(private http: HttpClient, private auth: AuthService) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: auth.getBasicAuth()
      }),
      responseType: 'json',
      observe: 'body'

    };
  }

  getTypesOfVacations(): Observable<any> {
    return this.http.get('/api/vacation/types', this.httpOptions);
  }

  sendVacationRequest(application: VacationApplication): Observable<any> {
    return this.http.post('/api/vacation', application, this.httpOptions);
  }
}
