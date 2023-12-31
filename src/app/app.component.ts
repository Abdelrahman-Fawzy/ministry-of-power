import { Component, OnInit } from '@angular/core';
import { LoginService } from './shared/services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ministry-of-power';

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.setCurrentUser()
  }

  setCurrentUser() {
    const user = localStorage.getItem('userData')
    this.loginService.setCurrentUser(JSON.parse(user!))
  }
}
