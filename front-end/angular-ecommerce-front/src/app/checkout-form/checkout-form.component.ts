import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css'],
})
export class CheckoutFormComponent implements OnInit {
  checkoutForm: FormGroup = {} as FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.checkoutForm = this.formBuilder.group({
      customer: this.formBuilder.group({
        firstName: '',
        lastName: '',
        email: '',
      }),
      address: this.formBuilder.group({
        country: '',
        street: '',
        city: '',
        state: '',
        zipCode: '',
      }),
      billingAddress: this.formBuilder.group({
        country: '',
        street: '',
        city: '',
        state: '',
        zipCode: '',
      }),
      creditCard: this.formBuilder.group({
        cardNumber: '',
        cardHolderName: '',
        cardExpirationMonth: '',
        cardExpirationYear: '',
        cardSecurityCode: '',
        cardType: '',
      }),
    });
  }

  copyAddressToBillingAddress(event: any) {
    if (event.target.checked) {
      this.checkoutForm.controls['billingAddress'].setValue(
        this.checkoutForm.get('address')?.value
      );
    } else {
      this.checkoutForm.controls['billingAddress'].reset();
    }
  }

  onSubmit() {
    console.warn(this.checkoutForm?.get('customer')?.value);
    console.warn(this.checkoutForm?.get('address')?.value);
    console.warn(this.checkoutForm?.get('billingAddress')?.value);
  }
}
