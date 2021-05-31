import { Component, OnInit } from '@angular/core';
import {AuthService, CurrentUser} from '@core/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: CurrentUser = {
    username: '',
    password: ''
  };

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }


  onSubmit(): void {
    this.authService.login(this.user);
  }
}
