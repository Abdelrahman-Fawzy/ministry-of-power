import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { AccountTypeComponent } from './create-account/account-type/account-type.component';
import { ContactingInformationComponent } from './create-account/contacting-information/contacting-information.component';
import { RequiredAttachmentsComponent } from './create-account/required-attachments/required-attachments.component';
import { CreatePasswordComponent } from './create-account/create-password/create-password.component';
import { ConfirmationComponent } from './create-account/confirmation/confirmation.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: CreateAccountComponent,
    children: [
      { path: 'account-type', component: AccountTypeComponent },
      { path: 'contacting-information', component: ContactingInformationComponent },
      { path: 'required-attachments', component: RequiredAttachmentsComponent },
      { path: 'create-password', component: CreatePasswordComponent },
      { path: 'confirmation', component: ConfirmationComponent },
      { path: 'signup', redirectTo: 'account-type', pathMatch: 'full' },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
