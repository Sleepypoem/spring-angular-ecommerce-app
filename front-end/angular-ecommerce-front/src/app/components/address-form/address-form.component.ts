import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ICountry, IState } from 'country-state-city';
import { SubForm } from 'src/app/interfaces/SubForm';
import { AddressService } from 'src/app/services/address.service';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./../forms-shared-css/forms.css'],
})
export class AddressFormComponent implements SubForm {
  @Input()
  parentForm: FormGroup;
  @Input()
  formGroupName: string;
  addressForm: FormGroup;
  countries: ICountry[] = [];
  states: IState[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private addressService: AddressService
  ) {
    this.countries = this.addressService.getCountries();
  }
  buildForm(): FormGroup {
    this.addressForm = this.formBuilder.group({
      country: ['', [Validators.required]],
      city: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(50),
        ],
      ],
      street: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(50),
        ],
      ],
      state: ['', [Validators.required]],
      zipCode: ['', [Validators.required]],
    });
    return this.addressForm;
  }

  ngOnInit(): void {
    this.setDefaultCountry('US');
  }

  setDefaultCountry(countryCode: string) {
    this.addressForm.get('country')?.setValue(countryCode);
    this.loadCountryStatesByCountryName(countryCode);
    this.addressForm.get('state')?.setValue(this.states[0]);
  }

  loadCountryStatesByCountryName(country: any) {
    this.states = this.addressService.getStatesByCountry(country);
  }

  public get street() {
    return this.addressForm.get('street');
  }

  public get city() {
    return this.addressForm.get('city');
  }

  public get state() {
    return this.addressForm.get('state');
  }

  public get zipCode() {
    return this.addressForm.get('zipCode');
  }

  public get country() {
    return this.addressForm.get('country');
  }
}
