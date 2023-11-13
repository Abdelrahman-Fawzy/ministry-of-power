import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CreateAccountService {
  baseUrl = environment.baseUrl
  createAccount: any = {
    accountTypeInformation: {
      AccountType : 0,
    },
    contactInformation : {
      Address : '',
      WorkEmail : '',
      FaxNumber : '',
      PhoneNumber : '',
      LogoImage : null
    },
    requiredAttachments: {
      RequestAttachments : []
    },
    createPassword: {
      Email : '',
      Password : '',
    }
  };

  constructor(private http: HttpClient, public router: Router) { }

  getAccountInformation() {
    return this.createAccount;
  }

  getAttachments(accountType: number) {
    return this.http.get(`${this.baseUrl}/AcountTypeAttchment/GetByAccountType/${accountType}`)
  }

  createNewAccount(model: any) {
    return this.http.post(`${this.baseUrl}/Auth/RegisterClient`, model)
    
  }

}
