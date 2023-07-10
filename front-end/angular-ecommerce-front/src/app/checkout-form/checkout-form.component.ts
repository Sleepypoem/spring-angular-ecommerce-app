import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AddressService } from '../services/address.service';
import { ICountry, IState, ICity } from 'country-state-city';

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
}
