import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from '@core/auth/auth.service';
import {Observable, Subject} from 'rxjs';
import {Bonus, Salary} from '@pages/admin/admin-salaries/admin-salaries.component';

@Injectable({
  providedIn: 'root'
})
export class AdminSalariesService {
  private responseEmpIDSubject = new Subject<string>();
  private requestEmpIDSubject = new Subject();
  private salaryFormVisibilitySubject = new Subject<Salary>();
  private bonusFormVisibilitySubject = new Subject();
  private salaryBonusesChangeSubject = new Subject();

  constructor(private http: HttpClient, private auth: AuthService) { }

  getAdminID(): string{
    return this.auth.getUserId();
  }

  getEmployees(): Observable<any>{
    const employeesURL = '/api/employee';
    const header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    header.append('Authorization', this.auth.getBasicAuth());

    const httpOptions = {
      headers: header
    };

    return this.http.get(employeesURL, httpOptions);
  }

  getSalaryData(employeeID: string): Observable<any>{
    const dataURL = '/api/salary/' + employeeID;
    const header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    header.append('Authorization', this.auth.getBasicAuth());

    const httpOptions = {
      headers: header,
    };

    return this.http.get(dataURL, httpOptions);
  }

  addSalary(salary: Salary, employeeID: string): void {
    const salaryAddURL = '/api/salary/' + employeeID;
    const header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    header.append('Authorization', this.auth.getBasicAuth());

    const httpOptions = {
      headers: header
    };

    this.http.post(salaryAddURL, salary, httpOptions).subscribe(
      () => this.salaryBonusesChangeSubject.next()
    );
  }

  editSalary(salary: Salary): void {
    const salaryEditURL = '/api/salary';
    const header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    header.append('Authorization', this.auth.getBasicAuth());

    const httpOptions = {
      headers: header
    };

    this.http.put<Salary>(salaryEditURL, salary, httpOptions).subscribe(
      () => this.salaryBonusesChangeSubject.next()
    );
  }

  addBonus(bonus: Bonus, employeeID: string): void {
    const bonusAddURL = '/api/bonus/' + employeeID;
    const header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    header.append('Authorization', this.auth.getBasicAuth());

    const httpOptions = {
      headers: header
    };

    this.http.post(bonusAddURL, bonus, httpOptions).subscribe(
      () => this.salaryBonusesChangeSubject.next()
    );
  }

  onSalaryBonusesChange(): Observable<any>{
    return this.salaryBonusesChangeSubject.asObservable();
  }

  showBonusForm(): void {
    this.bonusFormVisibilitySubject.next();
  }

  onBonusFormVisibilityEvent(): Observable<any> {
    return this.bonusFormVisibilitySubject.asObservable();
  }

  showSalaryForm(salary: Salary): void {
    this.salaryFormVisibilitySubject.next(salary);
  }

  onSalaryFormVisibilityEvent(): Observable<Salary>{
    return this.salaryFormVisibilitySubject.asObservable();
  }

  askForEmployeeInfo(): void{
    this.requestEmpIDSubject.next();
  }

  onRequestEmpID(): Observable<any>{
    return this.requestEmpIDSubject.asObservable();
  }

  changeEmployeeInfo(employeeID: string): void{
    this.responseEmpIDSubject.next(employeeID);
  }

  onChangeEmployeeInfo(): Observable<string>{
    return this.responseEmpIDSubject.asObservable();
  }
}
