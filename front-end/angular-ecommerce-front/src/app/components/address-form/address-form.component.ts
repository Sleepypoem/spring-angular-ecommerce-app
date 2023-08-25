import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IState } from 'country-state-city';
import { AddressService } from 'src/app/services/address.service';
import { addressForm } from 'src/config/forms';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./../forms-shared-css/forms.css'],
})
export class AddressFormComponent {
  @Input() formGroup: FormGroup;
  address: any = addressForm;

  constructor(private addressService: AddressService) {}

  populateStateOptions(countryName: string) {
    let states = this.loadStatesByCountryName(countryName);
    let stateList = states.map((state) => {
      return { key: state.name, value: state.name };
    });
    this.address[1].options = stateList;
    this.formGroup.get('address')?.get('state')?.setValue(states[0].name);
  }

  populateCountryOptions() {
    let countries = this.addressService.getCountries();
    let countryList = countries.map((country) => {
      return { key: country.isoCode, value: country.name };
    });
    this.address[0].options = countryList;
  }

  loadStatesByCountryName(country: any): IState[] {
    return this.addressService.getStatesByCountry(country);
  }

  subscribeToCountryFields() {
    this.formGroup.valueChanges.subscribe((value) => {
      if (value?.address != null) {
        this.formGroup
          .get('address')
          ?.get('country')
          ?.valueChanges.subscribe((value) => this.populateStateOptions(value));
      }
    });
  }

  ngOnInit() {
    this.populateCountryOptions();
    this.populateStateOptions('US');
    this.subscribeToCountryFields();
  }
}
