import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CreateAccountService } from 'src/app/shared/services/create-account.service';

@Component({
  selector: 'app-contacting-information',
  templateUrl: './contacting-information.component.html',
  styleUrls: ['./contacting-information.component.scss']
})
export class ContactingInformationComponent implements OnInit {

  contactInformation: any;

  constructor(private router: Router, private accountService: CreateAccountService, private toastr: ToastrService) {
    this.contactInformation = this.accountService.getAccountInformation().contactInformation;
  }

  ngOnInit(): void {
  }

  handleFileInput(event: any) {
    const logo = document.getElementById('file-chosen');
    logo!.textContent = event.target.files[0].name;

    var files = event.target.files as FileList;
    let file = files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.contactInformation.LogoImage = file
    };
  }

  nextPage() {
    if (!this.accountService.getAccountInformation().accountTypeInformation.AccountType) {
      this.toastr.error('يجب اختيار نوع الحساب من الخطوة السابقة')
    } else if (
      this.contactInformation.Address && 
      this.contactInformation.WorkEmail && 
      this.contactInformation.FaxNumber && 
      this.contactInformation.PhoneNumber) {
        this.accountService.createAccount.contactInformation = this.contactInformation
        this.router.navigate(['signup/required-attachments']);
        return;
    } else {
      this.toastr.error('يجب استكمال البيانات')
    }
}

  prevPage() {
      this.router.navigate(['signup/account-type']);
  }

}
