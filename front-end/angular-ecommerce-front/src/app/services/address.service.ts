import { Injectable } from '@angular/core';
import { Country, State, City } from 'country-state-city';

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  getCountries() {
    return Country.getAllCountries();
  }

  getStatesByCountry(countryShortName: string) {
    return State.getStatesOfCountry(countryShortName);
  }

  getCitiesByState(country: string, state: string) {
    return City.getCitiesOfState(country, state);
  }
}
