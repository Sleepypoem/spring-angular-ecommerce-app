export class CreditCard {
  id?: number;

  cardHolderName?: string;

  cardNumber?: string;

  expirationMonth?: string;

  expirationYear?: string;

  securityCode?: string;

  cardType?: string;

  constructor() {}

  withCardHolderName(cardHolderName: string): CreditCard {
    this.cardHolderName = cardHolderName;
    return this;
  }

  withCardNumber(cardNumber: string): CreditCard {
    this.cardNumber = cardNumber;
    return this;
  }

  withExpirationMonth(expirationMonth: string): CreditCard {
    this.expirationMonth = expirationMonth;
    return this;
  }

  withExpirationYear(expirationYear: string): CreditCard {
    this.expirationYear = expirationYear;
    return this;
  }

  withSecurityCode(securityCode: string): CreditCard {
    this.securityCode = securityCode;
    return this;
  }

  withCardType(cardType: string): CreditCard {
    this.cardType = cardType;
    return this;
  }

  withId(id: number): CreditCard {
    this.id = id;
    return this;
  }
}
