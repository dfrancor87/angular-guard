import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  routeRedirect = '';


  ngOnInit(): void {
  }

  login() {
    this.authService.login();
    this.routeRedirect = this.authService.urlUsuarioIntentaAcceder;
    this.authService.urlUsuarioIntentaAcceder = '';
    this.router.navigate([this.routeRedirect]);
  }

}
