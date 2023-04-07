import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
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
      validators: [Validators.required, Validators.email],
      nonNullable: true,
    }),
    password: new FormControl('', {
      validators: [Validators.required, passwordValidator],
      nonNullable: true,
    }),
    isAdmin: new FormControl(false, { nonNullable: true }),
  });

  onSubmit() {
    if (this.loginForm.valid) {
      this.logService.logIn(this.loginForm.value.login!);
      this.logService.isAdmin = this.loginForm.controls.isAdmin.value;
    }
  }

  getErrorMessage(name: keyof UserLoginType) {
    const field = this.loginForm.get(name);
    if (field?.hasError('required')) {
      return `Please enter a ${name}`;
    }
    if (field?.hasError('email')) {
      return 'Wrong e-mail format';
    }
    if (field?.hasError('passwordFormat')) {
      return field.errors?.['passwordFormat'];
    } else return '';
  }
}

const passwordValidator = (
  control: AbstractControl
): ValidationErrors | null => {
  const checks: Record<string, boolean> = {
    'at least 8 characters': control.value.length < 8,
    'a mixture of both uppercase and lowercase letters':
      !/(?=.*[a-z])(?=.*[A-Z])/.test(control.value),
    'a mixture of letters and numbers': !/(?=.*[0-9])(?=.*[a-z])/.test(
      control.value
    ),
    'at least one special character':
      !/(?=.*[*.!@#$%^&(){}[\]:;<>,.?~_+\-=|\\])/.test(control.value),
  };

  for (const key in checks) {
    if (checks[key]) {
      return {
        passwordFormat: `Your password isn't strong enough, it should contain ${key}`,
      };
    }
  }

  return null;
};
