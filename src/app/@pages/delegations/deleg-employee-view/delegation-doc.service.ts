import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthService} from "@core/auth/auth.service";

@Injectable({
  providedIn: 'root'
})
export class DelegationDocService {

  constructor(private httpClient: HttpClient, private auth: AuthService) {
  }

  getDocument(id: string): Observable<Blob> {
    const header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    header.append('Authorization', this.auth.getBasicAuth());

    const httpOptions = {
      responseType: 'blob' as 'json',
      headers: header
    };
    return this.httpClient.get<Blob>('/api/doc/delegation/' + id, httpOptions);
  }
}
