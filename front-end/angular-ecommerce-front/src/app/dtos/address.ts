export class Address {
  street?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  country?: string;
  id?: number;

  constructor() {}

  withStreet(street: string): Address {
    this.street = street;
    return this;
  }

  withCity(city: string): Address {
    this.city = city;
    return this;
  }

  withState(state: string): Address {
    this.state = state;
    return this;
  }

  withZipCode(zipCode: string): Address {
    this.zipCode = zipCode;
    return this;
  }

  withCountry(country: string): Address {
    this.country = country;
    return this;
  }

  withId(id: number): Address {
    this.id = id;
    return this;
  }
}
