import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginData } from 'src/app/shared/models/loginData';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formValues!: LoginData
  formValid: boolean = false
  formSubmitted: boolean = false
  public loginForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    public router: Router,
    private loginService: LoginService,
    private toastr: ToastrService,
  ) {}

  ngOnInit(): void {
    this.createForm()
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(4)]]
    });
  }

  get f() {
    return this.loginForm.controls
  }

  validateForm() {


    if (!this.formValues.email || !this.formValues.password) {
      this.toastr.error('تأكد من جميع البانات المطلوبة')
      this.formValid = false
    } else if (this.loginForm.invalid) {
      this.toastr.error('هناك خطأ ما,, تأكد من جميع البيانات')
      this.formValid = false
    } else {
      this.formValid = true
    }
    return this.formValid
  }

  login() {
    this.formSubmitted = true
    this.formValues = this.loginForm.value as LoginData

    if (this.validateForm()) {

      let userModelToSend = {
        email: this.formValues.email,
        password: this.formValues.password
      } as LoginData

      this.loginService.login(userModelToSend).subscribe(res => {
        console.log(`res`, res);
      }, err => {
        console.log(err);
        this.toastr.error(err.error.Message)
      })

    }
  }

}
