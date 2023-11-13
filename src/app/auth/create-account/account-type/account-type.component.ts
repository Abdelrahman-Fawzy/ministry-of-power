import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountType } from 'src/app/shared/enums/accounts.enums';
import { CreateAccountService } from 'src/app/shared/services/create-account.service';

@Component({
  selector: 'app-account-type',
  templateUrl: './account-type.component.html',
  styleUrls: ['./account-type.component.scss']
})
export class AccountTypeComponent implements OnInit {

  isChecked: boolean = false;
  accountTypeInformation: any;
  accountTypes = AccountType

  constructor(private router: Router, private accountService: CreateAccountService, private toastr: ToastrService) {
    this.accountTypeInformation = this.accountService.getAccountInformation().accountTypeInformation;
  }

  ngOnInit() {
    console.log(this.accountTypeInformation);
    
  }

  nextPage() {
    if (this.accountTypeInformation.AccountType != 0) {
      this.accountService.createAccount.accountTypeInformation = this.accountTypeInformation
      this.router.navigate(['signup/contacting-information']);
      return;
    } else {
      this.toastr.error('يجب إختيار النوع')
    }
  }
}