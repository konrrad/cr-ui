import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from '@pages/main/main.component';
import {LoginComponent} from '@core/auth/login/login.component';
import {AuthAdminGuard} from '@core/auth/auth-admin.guard';
import {AuthActivateGuard} from '@core/auth/auth-activate.guard';
import {AuthGuard} from '@core/auth/auth.guard';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'main', component: MainComponent, canActivate: [AuthActivateGuard]},
  {
    path: 'delegations',
    loadChildren: () => import('@pages/delegations/delegations.module').then(m => m.DelegationsModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'vacation',
    loadChildren: () => import('@pages/vacations/vacations.module').then(m => m.VacationsModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'salarybonuses',
    loadChildren: () => import('@pages/salary-bonuses/salary-bonuses.module').then(m => m.SalaryBonusesModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'admin',
    loadChildren: () => import('@pages/admin/admin.module').then(m => m.AdminModule),
    canLoad: [AuthAdminGuard]
  },
  {path: '**', redirectTo: '/login'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthAdminGuard, AuthActivateGuard, AuthGuard]
})
export class AppRoutingModule {
}
