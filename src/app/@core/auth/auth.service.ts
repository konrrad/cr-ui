import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Router} from '@angular/router';
import {CredentialsService} from '@core/auth/credentials.service';
import {Model, ModelFactory} from '@angular-extensions/model';

export interface CurrentUser {
  username?: string;
  password?: string;
  userId?: string;
  administrator?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private model: Model<CurrentUser>;
  currentUser$: Observable<CurrentUser>;


  constructor(private http: HttpClient, private router: Router, private credentialsService: CredentialsService,
              private modelFactory: ModelFactory<CurrentUser>) {
    this.model = this.modelFactory.create(null);
    this.currentUser$ = this.model.data$;

    if (this.credentialsService.isAuthenticated()) {
      const tmpUser = this.credentialsService.credentials;
      let headers = new HttpHeaders();
      headers = headers.append('Content-Type', 'application/json');
      headers = headers.append('Authorization', this.getBasicAuthFromUser(tmpUser));

      this.http.post('/api/login', tmpUser, {headers}).subscribe((currentUser: CurrentUser) => {
          if (!!currentUser?.userId) {
            this.model.set(currentUser);
            if (this.router.url === '/login') {
              this.router.navigate(['main']);
            }
          }
        },
        (error => console.log(error)));

    }
  }


  getUsername(): string {
    return this.model.get()?.username;
  }

  getUserId(): string {
    return this.model.get()?.userId;
  }

  getPassword(): string {
    return this.model.get()?.password;
  }

  isAdministrator(): boolean {
    return this.model.get()?.administrator;
  }

  isAdmin(): Promise<boolean> {
    const tmpUser = this.credentialsService.credentials;
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Authorization', this.getBasicAuthFromUser(tmpUser));

    return this.http.post('/api/login', tmpUser, {headers}).pipe(
      map((currentUser: CurrentUser) => currentUser.administrator)).toPromise();
  }

  isAuthenticated(): Promise<boolean> {
    const tmpUser = this.credentialsService.credentials;
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Authorization', this.getBasicAuthFromUser(tmpUser));

    return this.http.post('/api/login', tmpUser, {headers}).pipe(
      map((currentUser: CurrentUser) => currentUser.userId !== '')).toPromise();
  }

  getBasicAuth(): string {
    return 'Basic ' + btoa(this.getUsername() + ':' + this.getPassword());
  }

  getBasicAuthFromUser(user: CurrentUser): string {
    return 'Basic ' + btoa(user.username + ':' + user.password);
  }


  login(user: CurrentUser): void {
    this.model.set(null);
    this.credentialsService.setCredentials(null);

    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Authorization', this.getBasicAuthFromUser(user));

    this.http.post('/api/login', user, {headers}).subscribe((responseUser: CurrentUser) => {

        this.credentialsService.setCredentials(responseUser);
        this.model.set(responseUser);
      },
      (error => console.log(error)
      ));
  }

  logout(): void {
    this.model.set(null);
    this.credentialsService.setCredentials(null);
    this.router.navigate(['/login']);
  }
}


