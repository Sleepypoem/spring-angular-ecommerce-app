import { Component, Input } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { creditCardForm } from 'src/config/forms';

@Component({
  selector: 'app-credit-card-form',
  templateUrl: './credit-card-form.component.html',
  styleUrls: ['./../forms-shared-css/forms.css'],
})
export class CreditCardFormComponent {
  @Input() formGroup: FormGroup;
  cardForm: any = creditCardForm;
  today: Date = new Date();
  currentMonth = this.today.getMonth() + 1;
  currentYear = this.today.getFullYear();
  constructor() {
    this.populateOptionsAndSetDefaults();
  }

  private createMonthOptions() {
    let monthOptions = [];
    for (let i = 1; i <= 12; i++) {
      monthOptions.push({
        key: i,
        value: i,
      });
    }

    return monthOptions;
  }

  private populateOptionsAndSetDefaults() {
    this.cardForm[2].options = this.createMonthOptions();
    this.cardForm[2].value = this.currentMonth;
    this.cardForm[3].options = this.createYearOptions();
    this.cardForm[3].value = this.currentYear;
  }

  private createYearOptions() {
    let yearOptions = [];
    for (let i = this.currentYear; i <= this.currentYear + 10; i++) {
      yearOptions.push({
        key: i,
        value: i,
      });
    }
    return yearOptions;
  }

  ngOnInit(): void {
    this.formGroup?.valueChanges.subscribe((value) => {
      if (value.creditCard != null) {
        this.limitFieldInput(this.cvvField!, 3);
        this.limitFieldInput(this.cardNumberField!, 16);
      }
    });
  }

  private limitFieldInput(field: AbstractControl, limit: number) {
    if (field.value.length > limit) {
      field.setValue(field.value.slice(0, -1));
    }
  }

  get cvvField(): AbstractControl {
    return this.formGroup.get('creditCard')?.get('cvv')!;
  }

  get cardNumberField(): AbstractControl {
    return this.formGroup.get('creditCard')?.get('cardNumber')!;
  }
}
