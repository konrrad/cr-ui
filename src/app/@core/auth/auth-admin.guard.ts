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
export class AuthAdminGuard implements CanLoad {

  constructor(private authService: AuthService, private router: Router) {
  }

  async canLoad(route: Route, segments: UrlSegment[]): Promise<boolean | UrlTree> {
    const result = await this.authService.isAdmin();
    if (!result) {
      this.router.navigate(['login']);
    }
    return result;
  }
}



