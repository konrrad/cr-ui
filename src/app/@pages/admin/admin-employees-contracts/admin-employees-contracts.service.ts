import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from '@core/auth/auth.service';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeContractsService {
  constructor(private http: HttpClient, private auth: AuthService) { }

  private subject = new Subject<any>();
  private contractGeneratorSubject = new Subject<any>();

  public showEmployeeContracts(employeeWithContract: EmployeeWithContract): void {
    this.getEmployeeContracts(employeeWithContract).subscribe(
      (list: Array<EmployeeWithContract>) => {
        this.subject.next(list);
      }
    );
  }

  public getContractsEvent(): Observable<any> {
    return this.subject.asObservable();
  }

  public getContractGeneratorEvent(): Observable<any> {
    return this.contractGeneratorSubject.asObservable();
  }

  public showContractGenerator(isHidden: boolean): void {
    this.contractGeneratorSubject.next(isHidden);
  }

  public getEmployeeContracts(employeeWithContract: EmployeeWithContract): Observable<any> {
    const employeeID = employeeWithContract.id;
    const URL = '/api/employee/contracts/' + employeeID;
    const header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    header.append('Authorization', this.auth.getBasicAuth());

    const httpOptions = {
      headers: header
    };

    return this.http.get(URL, httpOptions);
  }

  public getEmployeesWithContracts(): Observable<any>{
    const URL = '/api/employee/contracts';
    const header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    header.append('Authorization', this.auth.getBasicAuth());

    const httpOptions = {
      headers: header
    };

    return this.http.get(URL, httpOptions);
  }
}

interface EmployeeWithContract{
  id?: string;
  name?: string;
  surname?: string;
  email?: string;
  endDate?: string;
  type?: ContractType;
}

export enum ContractType{
  UMOWA_O_PRACE_NA_CZAS_NIEOKRESLONY = 'NA_CZAS_NIEOKRESLONY',
  UMOWA_O_PRACE_NA_CZAS_OKRESLONY = 'NA_CZAS_OKRESLONY',
  UMOWA_NA_OKRES_PROBNY = 'OKRES_PROBNY',
  UMOWA_O_DZIELO = 'UMOWA_O_DZIELO',
  UMOWA_ZLECENIE = 'UMOWA_ZLECENIE'
}
