import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserLoginType } from '../../models/user-login';
import { LoginService } from '../../services/loging.service';

type FormType = Record<keyof UserLoginType, FormControl<string>>;

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private logService: LoginService) {}
  loginForm = new FormGroup({
    login: new FormControl('', {
      validators: Validators.required,
      nonNullable: true,
    }),
    password: new FormControl('', {
      validators: Validators.required,
      nonNullable: true,
    }),
  });

  onSubmit() {
    if (this.loginForm.valid) {
      this.logService.logIn(this.loginForm.value.login!);
    }
  }
}
