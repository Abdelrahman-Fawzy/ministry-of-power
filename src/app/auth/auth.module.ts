import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { SharedModule } from '../shared/shared.module';
import { AccountTypeComponent } from './create-account/account-type/account-type.component';
import { ContactingInformationComponent } from './create-account/contacting-information/contacting-information.component';
import { RequiredAttachmentsComponent } from './create-account/required-attachments/required-attachments.component';
import { CreatePasswordComponent } from './create-account/create-password/create-password.component';
import { ConfirmationComponent } from './create-account/confirmation/confirmation.component';


@NgModule({
  declarations: [
    LoginComponent,
    CreateAccountComponent,
    AccountTypeComponent,
    ContactingInformationComponent,
    RequiredAttachmentsComponent,
    CreatePasswordComponent,
    ConfirmationComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule { }
