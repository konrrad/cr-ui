import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment, UrlTree
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {AuthService, CurrentUser} from '@core/auth/auth.service';
import {catchError, filter, map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthActivateGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {
  }

  // tslint:disable-next-line:max-line-length
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.currentUser$.pipe(
      filter((user) => !!user),
      map((user: CurrentUser) => !!user),
      tap((isLogged: boolean) => {
        if (!isLogged) {
          this.router.navigate(['login']);
        }
      })
    );
  }
}
