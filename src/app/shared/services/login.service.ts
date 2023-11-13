import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ReplaySubject, map } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { LoginData, User } from '../models/loginData';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUrl = environment.baseUrl
  private currentUserSource = new ReplaySubject<User>(1)
  currentUser$ = this.currentUserSource.asObservable()
  
  constructor(private http: HttpClient, public router: Router) { }

  login(model: LoginData) {
    console.log(`${this.baseUrl}/Auth/loginAdmin`);
    
    return this.http.post(`${this.baseUrl}/Auth/loginAdmin`, model).pipe(
      map((response: any) => {
        console.log(response);
        
        const user = response
        if (user) {
          localStorage.setItem('userData', JSON.stringify(user))
          this.currentUserSource.next(user)
          this.router.navigate(['/'])
        }
      })
    )
  }

  setCurrentUser(user: User) {
    this.currentUserSource.next(user)
  }

  Logout(token: any) {
    return this.http.post(`${this.baseUrl}/Auth/revokeToken`, token).subscribe(res => {
      console.log(`res`, res);
      localStorage.removeItem('userData')
      this.currentUserSource.next(null!)
      this.router.navigate(['/auth/login'])
    })

    // map((res) => {
    //   console.log(res);
      
    //   localStorage.removeItem('user')
    //   this.currentUserSource.next(null!)
    //   this.router.navigate(['/auth/login'])
    // })
  }
}
