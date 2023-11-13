import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CreateAccountService } from 'src/app/shared/services/create-account.service';

@Component({
  selector: 'app-required-attachments',
  templateUrl: './required-attachments.component.html',
  styleUrls: ['./required-attachments.component.scss']
})
export class RequiredAttachmentsComponent implements OnInit {

  requiredAttachments: any;
  attachmentsList: any
  attachmentsUploaded: any[] = []

  constructor(private router: Router, private accountService: CreateAccountService, private toastr: ToastrService) {
    this.requiredAttachments = this.accountService.getAccountInformation().requiredAttachments;
  }

  ngOnInit(): void {
    this.getAttachments()
  }

  getAttachments() {
    let accountType = this.accountService.getAccountInformation().accountTypeInformation.AccountType
    if (accountType != 0) {
      this.accountService.getAttachments(accountType).subscribe((attachments => {
        this.attachmentsList = attachments
      }))
    } else {
      this.toastr.error('يجب اختيار نوع الحساب من الخطوات السابقة')
    }
  }

  handleFileInput(attach: any, event: any) {
    const logo = document.getElementById(attach.name + '-chosen');
    const status = document.getElementById(attach.name + '-choosed');
    logo!.textContent = event.target.files[0].name;

    var files = event.target.files as FileList;
    let file = files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      let fileToSend = {
        id: attach.id,
        fileUploaded: file
      }
      this.attachmentsUploaded.push(fileToSend)
      status!.style.display = 'block'
    };
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
        this.toastr.error('يجب استكمال معلومات التواصل من الخطوة السابقة')
      } else if (this.attachmentsUploaded.length > 0) {
          this.accountService.createAccount.requiredAttachments.RequestAttachments = this.attachmentsUploaded
          this.router.navigate(['signup/create-password']);
          return;
    } else {
      this.toastr.error('يجب استكمال البيانات')
    }
}

  prevPage() {
      this.router.navigate(['signup/contacting-information']);
  }

}
