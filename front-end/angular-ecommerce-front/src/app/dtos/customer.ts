export class Customer {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  image?: string;
  id?: number;
  constructor() {}

  withFirstName(firstName: string): Customer {
    this.firstName = firstName;
    return this;
  }

  withLastName(lastName: string): Customer {
    this.lastName = lastName;
    return this;
  }

  withEmail(email: string): Customer {
    this.email = email;
    return this;
  }

  withId(id: number): Customer {
    this.id = id;
    return this;
  }
}
