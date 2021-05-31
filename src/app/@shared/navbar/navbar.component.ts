import {Component, OnInit} from '@angular/core';
import {AuthService} from '@core/auth/auth.service';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isAdmin: boolean;

  constructor(public auth: AuthService) {
  }

  ngOnInit(): void {
    this.isAdmin = this.auth.isAdministrator();
  }

  logout($event: MouseEvent): void {
    this.auth.logout();
  }
}
