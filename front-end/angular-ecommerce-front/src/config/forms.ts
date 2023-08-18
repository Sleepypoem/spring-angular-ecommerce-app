import { Validators } from '@angular/forms';
import { DropdownField } from 'src/app/dtos/dropdownField';
import { FieldBase } from 'src/app/dtos/fieldBase';
import { PasswordField } from 'src/app/dtos/passwordField';
import { TextField } from 'src/app/dtos/textField';
import { CustomValidators } from 'src/app/validators/CustomValidators';

export const customerForm: FieldBase<string>[] = [
  new TextField({
    key: 'firstName',
    label: 'First name',
    value: '',
    placeholder: 'Enter your first name',
    validators: [
      Validators.required,
      Validators.minLength(3),
      CustomValidators.notOnlyBlankSpaces,
      Validators.maxLength(50),
    ]!,
    customValidationMessages: new Map<string, string>([
      ['notOnlyBlankSpaces', 'This field cannot contain only blank spaces.'],
      ['required', 'First name is required'],
      ['minlength', 'This field must be at least 3 characters long.'],
      ['maxlength', 'This field must be at most 50 characters long.'],
    ]),
  }),
  new TextField({
    key: 'lastName',
    label: 'Last name',
    value: '',
    placeholder: 'Enter your last name',
    validators: [
      Validators.required,
      Validators.minLength(3),
      CustomValidators.notOnlyBlankSpaces,
      Validators.maxLength(50),
    ]!,
    customValidationMessages: new Map<string, string>([
      ['notOnlyBlankSpaces', 'This field cannot contain only blank spaces.'],
      ['required', 'Last name is required'],
      ['minlength', 'This field must be at least 3 characters long.'],
      ['maxlength', 'This field must be at most 50 characters long.'],
    ]),
  }),
  new TextField({
    key: 'email',
    label: 'Email',
    value: '',
    placeholder: 'Enter your email',
    validators: [
      Validators.required,
      CustomValidators.notOnlyBlankSpaces,
      Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
    ]!,
    customValidationMessages: new Map<string, string>([
      ['pattern', 'Please enter a valid email address.'],
      ['required', 'email is required'],
    ]),
  }),
  new TextField({
    key: 'phone',
    label: 'Phone number',
    value: '',
    placeholder: 'Enter your phone number',
    validators: [
      Validators.required,
      CustomValidators.notOnlyBlankSpaces,
      Validators.pattern(
        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
      ),
    ],
    customValidationMessages: new Map<string, string>([
      ['pattern', 'Please enter a valid phone number.'],
      ['required', 'phone number is required'],
      ['notOnlyBlankSpaces', 'This field cannot contain only blank spaces.'],
    ]),
  }),
];

export const customerSignUpForm: FieldBase<string>[] = [
  new TextField({
    key: 'firstName',
    label: 'First name',
    value: '',
    placeholder: 'Enter your first name',
    validators: [
      Validators.required,
      Validators.minLength(3),
      CustomValidators.notOnlyBlankSpaces,
      Validators.maxLength(50),
    ]!,
    customValidationMessages: new Map<string, string>([
      ['notOnlyBlankSpaces', 'This field cannot contain only blank spaces.'],
      ['required', 'First name is required'],
      ['minlength', 'This field must be at least 3 characters long.'],
      ['maxlength', 'This field must be at most 50 characters long.'],
    ]),
  }),
  new TextField({
    key: 'lastName',
    label: 'Last name',
    value: '',
    placeholder: 'Enter your last name',
    validators: [
      Validators.required,
      Validators.minLength(3),
      CustomValidators.notOnlyBlankSpaces,
      Validators.maxLength(50),
    ]!,
    customValidationMessages: new Map<string, string>([
      ['notOnlyBlankSpaces', 'This field cannot contain only blank spaces.'],
      ['required', 'Last name is required'],
      ['minlength', 'This field must be at least 3 characters long.'],
      ['maxlength', 'This field must be at most 50 characters long.'],
    ]),
  }),
  new TextField({
    key: 'email',
    label: 'Email',
    value: '',
    placeholder: 'Enter your email',
    validators: [
      Validators.required,
      CustomValidators.notOnlyBlankSpaces,
      Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
    ]!,
    customValidationMessages: new Map<string, string>([
      ['pattern', 'Please enter a valid email address.'],
      ['required', 'email is required'],
    ]),
  }),
  new TextField({
    key: 'phone',
    label: 'Phone number',
    value: '',
    placeholder: 'Enter your phone number',
    validators: [
      Validators.required,
      CustomValidators.notOnlyBlankSpaces,
      Validators.pattern(
        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
      ),
    ],
    customValidationMessages: new Map<string, string>([
      ['pattern', 'Please enter a valid phone number.'],
      ['required', 'phone number is required'],
      ['notOnlyBlankSpaces', 'This field cannot contain only blank spaces.'],
    ]),
  }),

  new PasswordField({
    key: 'password',
    label: 'Password',
    value: '',
    placeholder: 'Enter your password',
    validators: [
      Validators.required,
      CustomValidators.notOnlyBlankSpaces,
      Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/),
    ],
    customValidationMessages: new Map<string, string>([
      ['required', 'Password is required'],
      ['notOnlyBlankSpaces', 'This field cannot contain only blank spaces.'],
      ['passwordMatch', "Passwords don't match"],
    ]),
  }),
  new PasswordField({
    key: 'confirmPassword',
    label: 'Confirm Password',
    value: '',
    placeholder: 'Confirm your password',
    validators: [
      Validators.required,
      CustomValidators.notOnlyBlankSpaces,
      CustomValidators.passwordMatchValidator,
      Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/),
    ],
    customValidationMessages: new Map<string, string>([
      ['required', 'Password is required'],
      ['notOnlyBlankSpaces', 'This field cannot contain only blank spaces.'],
      ['passwordMatch', "Passwords don't match"],
    ]),
  }),
];

export const addressForm: FieldBase<string>[] = [
  new DropdownField({
    key: 'country',
    label: 'Country',
    value: 'US',
    options: [],
  }),
  new DropdownField({
    key: 'state',
    label: 'State',
    value: 'Alabama',
    options: [],
  }),
  new TextField({
    key: 'zipCode',
    label: 'Zip Code',
    type: 'text',
    value: '',
    placeholder: 'Enter your zip code',
    validators: [Validators.required],
    customValidationMessages: new Map<string, string>([
      ['required', 'Zip code is required'],
    ]),
  }),
  new TextField({
    key: 'city',
    label: 'City',
    value: '',
    placeholder: 'Enter your city',
    validators: [Validators.required],
    customValidationMessages: new Map<string, string>([
      ['required', 'City is required'],
    ]),
  }),
  new TextField({
    key: 'street',
    label: 'Street',
    value: '',
    placeholder: 'Enter your street',
    validators: [Validators.required],
    customValidationMessages: new Map<string, string>([
      ['required', 'Street is required'],
    ]),
  }),
];

export const billingAddressForm: FieldBase<string>[] = [
  new DropdownField({
    key: 'country',
    label: 'Country',
    value: 'US',
    options: [],
    validators: [Validators.required],
  }),
  new DropdownField({
    key: 'state',
    label: 'State',
    value: 'Alabama',
    options: [],
    validators: [Validators.required],
  }),
  new TextField({
    key: 'zipCode',
    label: 'Zip Code',
    value: '',
    placeholder: 'Enter your zip code',
    validators: [Validators.required],
    customValidationMessages: new Map<string, string>([
      ['required', 'Zip code is required'],
    ]),
  }),
  new TextField({
    key: 'city',
    label: 'City',
    value: '',
    placeholder: 'Enter your city',
    validators: [Validators.required],
    customValidationMessages: new Map<string, string>([
      ['required', 'City is required'],
    ]),
  }),
  new TextField({
    key: 'street',
    label: 'Street',
    value: '',
    placeholder: 'Enter your street',
    validators: [Validators.required],
    customValidationMessages: new Map<string, string>([
      ['required', 'Street is required'],
    ]),
  }),
];

export const creditCardForm: FieldBase<string>[] = [
  new TextField({
    key: 'cardNumber',
    label: 'Card Number',
    value: '',
    placeholder: 'Enter your card number',
    validators: [
      Validators.required,
      Validators.maxLength(16),
      Validators.minLength(16),
      Validators.pattern(/^\d+$/),
      CustomValidators.notOnlyBlankSpaces,
    ],
    customValidationMessages: new Map<string, string>([
      ['pattern', 'Please enter a valid card number, only numbers allowed.'],
      ['required', 'Card number is required'],
      ['maxlength', 'This field must be at most 16 characters long.'],
      ['minlength', 'This field must be at least 16 characters long.'],
      ['notOnlyBlankSpaces', 'This field cannot contain only blank spaces.'],
    ]),
  }),
  new TextField({
    key: 'cardHolder',
    label: 'Card Holder',
    value: '',
    placeholder: 'Enter your card holder',
    validators: [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50),
      CustomValidators.notOnlyBlankSpaces,
    ],
    customValidationMessages: new Map<string, string>([
      ['required', 'Card holder name is required'],
      ['maxlength', 'This field must be at most 50 characters long.'],
      ['minlength', 'This field must be at least 3 characters long.'],
      ['notOnlyBlankSpaces', 'This field cannot contain only blank spaces.'],
    ]),
  }),
  new DropdownField({
    key: 'expirationMonth',
    label: 'Expiration Month',
    value: '',
  }),
  new DropdownField({
    key: 'expirationYear',
    label: 'Expiration Year',
    value: '',
  }),
  new TextField({
    key: 'cvv',
    label: 'CVV',
    value: '',
    placeholder: 'Enter your CVV',
    validators: [
      Validators.required,
      Validators.maxLength(3),
      Validators.minLength(3),
      Validators.pattern(/^\d+$/),
      CustomValidators.notOnlyBlankSpaces,
    ],
    customValidationMessages: new Map<string, string>([
      ['pattern', 'Please enter a valid cvv number, only numbers allowed.'],
      ['required', 'Card security code is required'],
      ['maxlength', 'This field must be at most 3 characters long.'],
      ['minlength', 'This field must be at least 3 characters long.'],
      ['notOnlyBlankSpaces', 'This field cannot contain only blank spaces.'],
    ]),
  }),
  new DropdownField({
    key: 'cardType',
    label: 'Card Type',
    value: 'Visa',
    options: [
      { key: 'Visa', value: 'Visa' },
      { key: 'MasterCard', value: 'MasterCard' },
    ],
    validators: [Validators.required],
  }),
];
