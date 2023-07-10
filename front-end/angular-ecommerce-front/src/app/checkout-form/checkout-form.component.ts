import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddressService } from '../services/address.service';
import { ICountry, IState } from 'country-state-city';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css'],
})
export class CheckoutFormComponent implements OnInit {
  checkoutForm: FormGroup = {} as FormGroup;
  countries: ICountry[] = [];

  states: IState[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private addressService: AddressService
  ) {
    this.countries = this.addressService.getCountries();
  }

  ngOnInit() {
    this.checkoutForm = this.formBuilder.group({
      customer: this.formBuilder.group({
        firstName: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(20),
          ],
        ],
        lastName: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(20),
          ],
        ],
        email: [
          '',
          [
            Validators.required,
            Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
          ],
        ],
      }),
      address: this.formBuilder.group({
        country: ['', [Validators.required]],
        street: ['', [Validators.required]],
        city: ['', [Validators.required]],
        state: ['', [Validators.required]],
        zipCode: ['', [Validators.required]],
      }),
      billingAddress: this.formBuilder.group({
        country: ['', [Validators.required]],
        street: ['', [Validators.required]],
        city: ['', [Validators.required]],
        state: ['', [Validators.required]],
        zipCode: ['', [Validators.required]],
      }),
      creditCard: this.formBuilder.group({
        cardNumber: ['', [Validators.required]],
        cardHolderName: ['', [Validators.required]],
        cardExpirationMonth: ['', [Validators.required]],
        cardExpirationYear: ['', [Validators.required]],
        cardSecurityCode: ['', [Validators.required]],
        cardType: ['', [Validators.required]],
      }),
    });
  }

  loadCountryStatesByCountryName(country: any) {
    console.log(this.checkoutForm.controls['address']);
    this.states = this.addressService.getStatesByCountry(country);
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

  public get firstName() {
    return this.checkoutForm.get('customer.firstName');
  }

  public get lastName() {
    return this.checkoutForm.get('customer.lastName');
  }

  public get email() {
    return this.checkoutForm.get('customer.email');
  }
}
