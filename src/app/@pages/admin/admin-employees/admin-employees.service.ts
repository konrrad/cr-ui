import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from '@core/auth/auth.service';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminEmployeesService {
  constructor(private http: HttpClient, private auth: AuthService) { }

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

    this.http.post<Employee>('/api/employee', employee, httpOptions).subscribe();
  }

  public editEmployee(employee: Employee): void {
    const header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    header.append('Authorization', this.auth.getBasicAuth());

    const httpOptions = {
      headers: header
    };

    this.http.put<Employee>('/api/employee', employee, httpOptions).subscribe();
  }

  public deleteEmployee(employee: Employee): void {
    const header = new HttpHeaders();
    const URL = '/api/employee/' + employee.id;
    header.append('Content-Type', 'application/json');
    header.append('Authorization', this.auth.getBasicAuth());

    const httpOptions = {
      headers: header,
    };

    this.http.delete<Employee>(URL, httpOptions).subscribe();
  }

  getEmployees(): Observable<any>{
    const employeesURL = '/api/employee';
    const header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    header.append('Authorization', this.auth.getBasicAuth());

    const httpOptions = {
      headers: header,
    };

    return this.http.get(employeesURL, httpOptions);
  }
}

interface Employee{
  id?: string;
  name?: string;
  surname?: string;
  email?: string;
  password?: string;
  isAdministrator?: boolean;
}
