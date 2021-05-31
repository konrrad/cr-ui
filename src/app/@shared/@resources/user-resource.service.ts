import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {finalize} from 'rxjs/operators';

const ENDPOINT = '/user';

export interface UserResourceService {
  id: number;
  first_name: string;
  last_name: string;
  created_at: string;
  updated_at: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserResourceService {
  loading$ = new BehaviorSubject(false); // TODO: decorator ?
  constructor(private httpClient: HttpClient) {
  }

  search(params: {} = {}):any {
    // INFO: set default params in query
    this.loading$.next(true);
    return this.httpClient
      .get<UserResourceService>(ENDPOINT, {params})
      .pipe(finalize(() => this.loading$.next(false)));
  }
}
