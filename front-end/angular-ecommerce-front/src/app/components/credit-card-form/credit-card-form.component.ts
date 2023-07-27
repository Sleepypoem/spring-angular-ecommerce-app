import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SubForm } from 'src/app/interfaces/SubForm';
import { CustomValidators } from 'src/app/validators/CustomValidators';

@Component({
  selector: 'app-credit-card-form',
  templateUrl: './credit-card-form.component.html',
  styleUrls: ['./../forms-shared-css/forms.css'],
})
export class CreditCardFormComponent implements SubForm {
  @Input()
  parentForm: FormGroup;
  @Input()
  formGroupName: string;
  creditCard: FormGroup;
  today: Date = new Date();

  constructor(private formBuilder: FormBuilder) {}
  buildForm(): FormGroup {
    this.creditCard = this.formBuilder.group({
      cardNumber: [
        '',
        [
          Validators.required,
          Validators.maxLength(16),
          Validators.minLength(16),
          Validators.pattern(/^\d+$/),
          CustomValidators.notOnlyBlankSpaces,
        ],
      ],
      cardHolderName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
          CustomValidators.notOnlyBlankSpaces,
        ],
      ],
      cardExpirationMonth: [this.today.getMonth() + 1, []],
      cardExpirationYear: [this.today.getFullYear(), []],
      cardSecurityCode: [
        '',
        [
          Validators.required,
          Validators.maxLength(3),
          Validators.minLength(3),
          Validators.pattern(/^\d+$/),
          CustomValidators.notOnlyBlankSpaces,
        ],
      ],
      cardType: ['VISA', []],
    });
    return this.creditCard;
  }

  ngOnInit(): void {
    this.creditCard
      .get('cardExpirationMonth')
      ?.setValue(this.today.getMonth() + 1);
    this.creditCard
      .get('cardExpirationYear')
      ?.setValue(this.today.getFullYear());
  }

  public get cardNumber() {
    return this.creditCard.get('cardNumber');
  }

  public get cardHolderName() {
    return this.creditCard.get('cardHolderName');
  }

  public get cardExpirationMonth() {
    return this.creditCard.get('cardExpirationMonth');
  }

  public get cardExpirationYear() {
    return this.creditCard.get('cardExpirationYear');
  }

  public get cardSecurityCode() {
    return this.creditCard.get('cardSecurityCode');
  }

  public get cardType() {
    return this.creditCard.get('cardType');
  }
}
