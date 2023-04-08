import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { NewCardType } from '../models';

type CardFormType = FormGroup<{
  [K in keyof NewCardType]: FormControl<NewCardType[K]>;
}>;

@Component({
  selector: 'admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss', '../../global-styles.scss'],
})
export class AdminPageComponent {
  constructor(private fBuilder: FormBuilder) {}
  cardForm: CardFormType = this.fBuilder.nonNullable.group({
    title: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(20)],
    ],
    description: ['', Validators.maxLength(255)],
    img: [
      '',
      [
        Validators.required,
        Validators.pattern(
          /^(http(s)*:\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/
        ),
      ],
    ],
    video: [
      '',
      [
        Validators.required,
        Validators.pattern(
          /^(http(s)*:\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/
        ),
      ],
    ],
    createdDate: ['', [Validators.required, dateValidate]],
  });

  onSubmit() {
    if (this.cardForm.invalid) {
      return;
    } else {
      console.log(this.cardForm.value);
    }
  }

  getErrorMessage(name: keyof NewCardType) {
    const field = this.cardForm.get(name);
    if (field?.getError('required')) {
      return `Please enter a ${name}`;
    }
    if (field?.getError('minlength')) {
      return `The ${name} is too short`;
    }
    if (field?.getError('maxlength')) {
      return `The ${name} is too long`;
    }
    if (field?.getError('pattern')) {
      return `The ${name} link is invalid`;
    }
    if (field?.getError('dateFormat')) {
      return `The ${name} is invalid`;
    }
    return '';
  }
}

function dateValidate(
  control: AbstractControl<string>
): ValidationErrors | null {
  const required = Date.now() - new Date(control.value).getTime() > 0;
  return required ? null : { dateFormat: true };
}
