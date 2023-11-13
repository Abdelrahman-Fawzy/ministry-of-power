import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/loginData';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentUser$!: Observable<User>;

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {
    this.currentUser$ = this.loginService.currentUser$
  }

  logOut() {
    let token = {
      token: JSON.parse(localStorage.getItem('userData')!).token
    }
    this.loginService.Logout(token)
  }

}
