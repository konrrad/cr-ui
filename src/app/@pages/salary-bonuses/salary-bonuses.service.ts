import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from '@core/auth/auth.service';
import {Observable, of} from 'rxjs';
import {Node} from '@vaseap/ng-material-treetable';

export interface SalaryResource {
  startDate: string;
  endDate: string;
  salary: number;
  id: number;
}

const SALARY_MOCK: Node<SalaryResource>[] = [{
  value: {
    startDate: '01/01/2020',
    endDate: '31/12/2020',
    salary: 45440,
    id: 1
  },
  children: [
    {
      value: {
        startDate: '01/01/2020',
        endDate: '01/02/2020',
        salary: 4250,
        id: 2
      },
      children: []
    },
    {
      value: {
        startDate: '01/02/2020',
        endDate: '01/03/2020',
        salary: 4300,
        id: 3
      },
      children: []
    },
    {
      value: {
        startDate: '01/03/2020',
        endDate: '01/04/2020',
        salary: 4340,
        id: 10
      },
      children: []
    },
    {
      value: {
        startDate: '01/04/2020',
        endDate: '01/05/2020',
        salary: 4250,
        id: 2
      },
      children: []
    },
    {
      value: {
        startDate: '01/05/2020',
        endDate: '01/06/2020',
        salary: 4300,
        id: 3
      },
      children: []
    },
    {
      value: {
        startDate: '01/06/2020',
        endDate: '01/07/2020',
        salary: 4340,
        id: 8
      },
      children: []
    },
    {
      value: {
        startDate: '01/07/2020',
        endDate: '01/08/2020',
        salary: 4250,
        id: 9
      },
      children: []
    },
    {
      value: {
        startDate: '01/08/2020',
        endDate: '01/09/2020',
        salary: 3400,
        id: 10
      },
      children: []
    },
    {
      value: {
        startDate: '01/09/2020',
        endDate: '01/10/2020',
        salary: 4340,
        id: 11
      },
      children: []
    },
    {
      value: {
        startDate: '01/10/2020',
        endDate: '01/11/2020',
        salary: 2300,
        id: 12
      },
      children: []
    },
    {
      value: {
        startDate: '01/11/2020',
        endDate: '01/12/2020',
        salary: 3340,
        id: 13
      },
      children: []
    }
  ],
},
  {
    value: {
      startDate: '01/01/2019',
      endDate: '31/12/2019',
      salary: 12890,
      id: 7
    },
    children: [
      {
        value: {
          startDate: '01/01/2019',
          endDate: '01/02/2019',
          salary: 4250,
          id: 6
        },
        children: []
      },
      {
        value: {
          startDate: '01/02/2019',
          endDate: '01/03/2019',
          salary: 4300,
          id: 5
        },
        children: []
      },
      {
        value: {
          startDate: '01/03/2019',
          endDate: '01/04/2019',
          salary: 4340,
          id: 4
        },
        children: []
      }
    ]
  }];

@Injectable({
  providedIn: 'root'
})
export class SalaryBonusesService {
  constructor(private http: HttpClient, private auth: AuthService) { }

  public getAll(): Observable<any> {
    return of(SALARY_MOCK);
  }

  getSalaryData(): Observable<any>{
    const userId = this.auth.getUserId();
    const URL = '/api/salary/' + userId;
    const header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    header.append('Authorization', this.auth.getBasicAuth());

    const httpOptions = {
      headers: header,
    };

    return this.http.get(URL, httpOptions);
  }

  getSalaryHistory(): Observable<any>{
    const userId = this.auth.getUserId();
    const URL = '/api/salary/' + userId + '/history';
    const header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    header.append('Authorization', this.auth.getBasicAuth());

    const httpOptions = {
      headers: header,
    };

    return this.http.get(URL, httpOptions);
  }

  getBonusesHistory(): Observable<any>{
    const userId = this.auth.getUserId();
    const URL = '/api/bonus/' + userId + '/history';
    const header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    header.append('Authorization', this.auth.getBasicAuth());

    const httpOptions = {
      headers: header,
    };

    return this.http.get(URL, httpOptions);
  }
}
