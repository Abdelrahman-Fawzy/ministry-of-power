import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginData } from 'src/app/shared/models/loginData';
import { CreateAccountService } from 'src/app/shared/services/create-account.service';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {

  accountInformation: any;
  formValid: boolean = false
  agreement: boolean = false;
  attachments: any

  constructor(private accountService: CreateAccountService, private login: LoginService, private router: Router, private toastr: ToastrService) {
    this.accountInformation = this.accountService.createAccount;
    this.attachments = this.accountInformation.requiredAttachments.RequestAttachments
  }

  ngOnInit() {
  }

  validateForm() {
    if (
      !this.accountInformation.accountTypeInformation.AccountType
    ) {
      this.toastr.error('لم يتم إختيار النوع من خانة نوع الحساب')
      this.formValid = false
    } else if (
      !this.accountInformation.contactInformation.Address &&
      !this.accountInformation.contactInformation.WorkEmail &&
      !this.accountInformation.contactInformation.PhoneNumber &&
      !this.accountInformation.contactInformation.FaxNumber &&
      !this.accountInformation.contactInformation.LogoImage
    ) {
      this.toastr.error('لم يتم إستكمال معلومات التواصل')
      this.formValid = false
    } else if (
      !this.accountInformation.createPassword.Email &&
      !this.accountInformation.createPassword.Password
    ) {
      this.toastr.error('لم يتم إنشاء بيانات كلمة المرور بشكل صحيح')
      this.formValid = false
    } else if (!this.agreement) {
      this.toastr.error('يجب الموافقة علي الإقرار')
      this.formValid = false
    } else {
      this.formValid = true
    }

    return this.formValid
  }

  createFormDataValues(values: any) {
    let formData = new FormData() as any
    Object.entries(values).forEach(([key, value]: any) => {
      formData.append(key, value)
    })

    return formData
  }

  complete() {
    let dataToSend = {
      Email: this.accountInformation.createPassword.Email,
      Name: this.accountInformation.createPassword.Email,
      Password: this.accountInformation.createPassword.Password,
      Address: this.accountInformation.contactInformation.Address,
      WorkEmail: this.accountInformation.contactInformation.WorkEmail,
      PhoneNumber: this.accountInformation.contactInformation.PhoneNumber,
      FaxNumber: this.accountInformation.contactInformation.FaxNumber,
      LogoImage: this.accountInformation.contactInformation.LogoImage,
      AccountType: this.accountInformation.accountTypeInformation.AccountType,
      RequestAttachments: this.accountInformation.requiredAttachments.RequestAttachments
    } as any

    let model = this.createFormDataValues(dataToSend)

    if (this.validateForm()) {
      this.accountService.createNewAccount(model).subscribe(res => {
        let loginData = {
          email: this.accountInformation.createPassword.Email,
          password: this.accountInformation.createPassword.Password
        } as LoginData
        
        this.toastr.success("Successfully created")
        this.login.login(loginData).subscribe(res => {
        }, err => {
          console.log(err);
          this.toastr.error(err.message)
        })
      }, err => {
        // this.toastr.error('حدث خطأ ما'
        for (const error in err.error.errors) {
          console.log(`${error}: ${err.error.errors[error]}`);
          this.toastr.error(err.error.errors[error])
        }
      })
    }
  }

  getFileName(event: any) {
    const fileChosen = document.getElementById('file-chosen');

    fileChosen!.textContent = event.target.files[0].name;
  }

  prevPage() {
      this.router.navigate(['signup/create-password']);
  }

}
