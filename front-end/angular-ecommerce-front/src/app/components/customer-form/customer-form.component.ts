import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/validators/CustomValidators';
import { SubForm } from 'src/app/interfaces/SubForm';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./../forms-shared-css/forms.css'],
})
export class CustomerFormComponent implements SubForm {
  userForm: FormGroup = {} as FormGroup;
  @Input()
  parentForm: FormGroup = {} as FormGroup;
  @Input()
  formGroupName: string;
  constructor(private formBuilder: FormBuilder) {}
  public buildForm(): FormGroup {
    this.userForm = this.formBuilder.group({
      firstName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          CustomValidators.notOnlyBlankSpaces,
          Validators.maxLength(50),
        ],
      ],
      lastName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          CustomValidators.notOnlyBlankSpaces,
          Validators.maxLength(50),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          CustomValidators.notOnlyBlankSpaces,
          Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
        ],
      ],
    });

    return this.userForm;
  }

  public get firstName() {
    return this.userForm.get('firstName');
  }

  public get lastName() {
    return this.userForm.get('lastName');
  }

  public get email() {
    return this.userForm.get('email');
  }
}
