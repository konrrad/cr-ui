import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from '@core/auth/auth.service';
import {Employee} from '@pages/admin/admin-employees/admin-employees-form/admin-employees-form.component';

@Injectable({
  providedIn: 'root'
})
export class AdminEmployeesFormService {

  constructor(private http: HttpClient, private auth: AuthService) {
  }

  private subject = new Subject<any>();

  public showEmployeeEditForm(employee: Employee): void {
    this.subject.next(employee);
  }

  public getFormVisibilityEvent(): Observable<any> {
    return this.subject.asObservable();
  }

  public addEmployee(employee: Employee): void {
    const header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    header.append('Authorization', this.auth.getBasicAuth());

    const httpOptions = {
      headers: header
    };

    this.http.post<Employee>('/api/employee/add', employee, httpOptions).subscribe();
  }

  public editEmployee(employee: Employee): void {
    const header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    header.append('Authorization', this.auth.getBasicAuth());

    const httpOptions = {
      headers: header
    };

    console.log(employee);
    this.http.put<Employee>('/api/employee/edit', employee, httpOptions).subscribe();
  }
}

