export class Customer {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  phone?: string;
  image?: string;
  id?: number;
  encodedImage?: string;
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

  withPassword(password: string): Customer {
    this.password = password;
    return this;
  }

  withPhone(phone: string): Customer {
    this.phone = phone;
    return this;
  }

  withImage(image: string): Customer {
    this.image = image;
    return this;
  }

  withEncodedImage(encodedImage: string): Customer {
    this.encodedImage = encodedImage;
    return this;
  }
}
