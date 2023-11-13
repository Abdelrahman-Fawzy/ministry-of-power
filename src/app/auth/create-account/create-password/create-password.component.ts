import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CreateAccountService } from 'src/app/shared/services/create-account.service';

@Component({
  selector: 'app-create-password',
  templateUrl: './create-password.component.html',
  styleUrls: ['./create-password.component.scss']
})
export class CreatePasswordComponent implements OnInit {

  createPassword: any;

  constructor(private router: Router, private accountService: CreateAccountService, private toastr: ToastrService) {
    this.createPassword = this.accountService.getAccountInformation().createPassword;
  }

  ngOnInit(): void {
    
  }

  nextPage() {
    if (!this.accountService.getAccountInformation().accountTypeInformation.AccountType) {
      this.toastr.error('يجب اختيار نوع الحساب من الخطوات السابقة')
    } else if (
      !this.accountService.getAccountInformation().contactInformation.Address &&
      !this.accountService.getAccountInformation().contactInformation.WorkEmail &&
      !this.accountService.getAccountInformation().contactInformation.FaxNumber &&
      !this.accountService.getAccountInformation().contactInformation.PhoneNumber
      ) {
        this.toastr.error('يجب استكمال معلومات التواصل من الخطوات السابقة')
      } else if (this.createPassword.Email && this.createPassword.Password ) {
          this.accountService.createAccount.createPassword = this.createPassword
          this.router.navigate(['signup/confirmation']);
          return;
    } else {
      this.toastr.error('يجب استكمال البيانات')
    }
  }

  prevPage() {
      this.router.navigate(['signup/required-attachments']);
  }

}
