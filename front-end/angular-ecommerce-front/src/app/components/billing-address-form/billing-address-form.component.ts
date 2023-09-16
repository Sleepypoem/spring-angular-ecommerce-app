import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IState } from 'country-state-city';
import { AddressService } from 'src/app/services/address.service';
import { addressForm, billingAddressForm } from 'src/config/forms';

@Component({
  selector: 'app-billing-address-form',
  templateUrl: './billing-address-form.component.html',
  styleUrls: ['./../forms-shared-css/forms.css'],
})
export class BillingAddressFormComponent {
  @Input() parentForm: FormGroup;
  billingAddress: any = billingAddressForm;

  constructor(private addressService: AddressService) {}

  ngOnInit() {
    this.populateCountryOptions();
    this.populateStateOptions('US');
    this.subscribeToCountryFields();
  }

  populateStateOptions(countryName: string) {
    let states = this.loadStatesByCountryName(countryName);
    let stateList = states.map((state) => {
      return { key: state.name, value: state.name };
    });
    this.billingAddress[1].options = stateList;
    this.parentForm
      .get('billingAddress')
      ?.get('state')
      ?.setValue(states[0].name);
  }

  populateCountryOptions() {
    let countries = this.addressService.getCountries();
    let countryList = countries.map((country) => {
      return { key: country.isoCode, value: country.name };
    });
    this.billingAddress[0].options = countryList;
  }

  loadStatesByCountryName(country: any): IState[] {
    return this.addressService.getStatesByCountry(country);
  }

  subscribeToCountryFields() {
    this.parentForm.valueChanges.subscribe((value) => {
      if (value?.billingAddress != null) {
        this.parentForm
          .get('billingAddress')
          ?.get('country')
          ?.valueChanges.subscribe((value) => this.populateStateOptions(value));
      }
    });
  }
}
