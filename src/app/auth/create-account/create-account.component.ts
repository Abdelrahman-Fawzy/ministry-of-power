import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  items!: MenuItem[];

  constructor() {}

  ngOnInit() {
      this.items = [
          {
              label: 'نوع الحساب',
              routerLink: 'account-type'
          },
          {
              label: 'معلومات التواصل',
              routerLink: 'contacting-information'
          },
          {
              label: 'المرفقات المطلوبة',
              routerLink: 'required-attachments'
          },
          {
              label: 'انشاء كلمة المرور',
              routerLink: 'create-password'
          },
          {
              label: 'التأكيد',
              routerLink: 'confirmation'
          }
      ];

  }
}
