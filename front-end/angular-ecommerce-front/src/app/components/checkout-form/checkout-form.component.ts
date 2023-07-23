import { Customer } from './../../dtos/customer';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ICountry, IState } from 'country-state-city';
import { Address } from 'src/app/dtos/address';
import { CreditCard } from 'src/app/dtos/creditCard';
import { Order } from 'src/app/dtos/order';
import { Purchase } from 'src/app/dtos/purchase';
import { AddressService } from 'src/app/services/address.service';
import { CartService } from 'src/app/services/cart.service';
import { CheckoutService } from 'src/app/services/checkout.service';
import { CustomValidators } from 'src/app/validators/CustomValidators';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css'],
})
export class CheckoutFormComponent implements OnInit {
  checkoutForm: FormGroup = {} as FormGroup;
  countries: ICountry[] = [];

  states: IState[] = [];

  totalPrice: number = 0.0;

  totalQuantity: number = 0;

  validationErrors: string[] = [];

  sessionStorage: Storage = sessionStorage;

  customer: Customer = new Customer();

  constructor(
    private formBuilder: FormBuilder,
    private addressService: AddressService,
    private cartService: CartService,
    private checkouService: CheckoutService,
    private router: Router
  ) {
    this.countries = this.addressService.getCountries();
    this.customer = JSON.parse(this.sessionStorage.getItem('customer')!);
  }

  ngOnInit() {
    this.checkoutForm = this.formBuilder.group({
      customer: this.formBuilder.group({
        firstName: [
          this.customer?.firstName,
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(20),
            CustomValidators.notOnlyBlankSpaces,
          ],
        ],
        lastName: [
          this.customer?.lastName,
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(20),
            CustomValidators.notOnlyBlankSpaces,
          ],
        ],
        email: [
          this.customer?.email,
          [
            Validators.required,
            Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
          ],
        ],
      }),
      address: this.formBuilder.group({
        country: ['', [Validators.required]],
        street: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(50),
            CustomValidators.notOnlyBlankSpaces,
          ],
        ],
        city: [
          '',
          [
            Validators.required,
            Validators.maxLength(50),
            CustomValidators.notOnlyBlankSpaces,
          ],
        ],
        state: ['', [Validators.required]],
        zipCode: [
          '',
          [Validators.required, CustomValidators.notOnlyBlankSpaces],
        ],
      }),
      billingAddress: this.formBuilder.group({
        country: ['', [Validators.required]],
        street: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(50),
            CustomValidators.notOnlyBlankSpaces,
          ],
        ],
        city: [
          '',
          [
            Validators.required,
            Validators.maxLength(50),
            CustomValidators.notOnlyBlankSpaces,
          ],
        ],
        state: ['', [Validators.required]],
        zipCode: [
          '',
          [Validators.required, CustomValidators.notOnlyBlankSpaces],
        ],
      }),
      creditCard: this.formBuilder.group({
        cardNumber: [
          '',
          [
            Validators.required,
            Validators.maxLength(16),
            Validators.minLength(16),
            CustomValidators.notOnlyBlankSpaces,
            Validators.pattern(/^\d+$/),
          ],
        ],
        cardHolderName: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(50),
            CustomValidators.notOnlyBlankSpaces,
          ],
        ],
        cardExpirationMonth: [''],
        cardExpirationYear: [''],
        cardSecurityCode: [
          '',
          [
            Validators.required,
            Validators.maxLength(3),
            Validators.minLength(3),
            CustomValidators.notOnlyBlankSpaces,
            Validators.pattern(/^\d+$/),
          ],
        ],
        cardType: ['', [Validators.required]],
      }),
    });
    this.updateCartReviewDetails();
    if (this.customer != null) {
      this.checkoutForm.controls['customer'].disable();
    }
  }

  loadCountryStatesByCountryName(country: any) {
    this.states = this.addressService.getStatesByCountry(country);
  }

  updateCartReviewDetails() {
    this.cartService.totalPrice.subscribe((data) => (this.totalPrice = data));
    this.cartService.totalQuantity.subscribe(
      (data) => (this.totalQuantity = data)
    );
    console.log('updateCartReviewDetails');
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
    if (this.checkoutForm.invalid) {
      this.checkoutForm.markAllAsTouched();
      console.log('form is invalid. errors: ');
      this.getFormValidationErrors();
      return;
    }
    let customer = this.getCustomerFromForm();
    let order = new Order()
      .withShippingAddress(this.getShippingAddressFromForm())
      .withBillingAddress(this.getBillingAddressFromForm())
      .withItems(this.cartService.cartItems)
      .withTotalPrice(this.totalPrice)
      .withTotalQuantity(this.totalQuantity);

    let purchase = new Purchase(customer, order);
    console.log('purchase dto: ', purchase);
    this.checkouService.makeOrder(purchase).subscribe({
      next: (response) => {
        alert(
          'Order placed successfully! tracking N0: ' +
            response.orderTrackingNumber
        );
        this.cleanCart();
      },
      error: (err) => {
        alert('Error while placing order: ' + err.error.message);
      },
    });
  }

  public cleanCart() {
    this.cartService.cleanCart();
    this.router.navigate(['/']);
  }

  getFormValidationErrors() {
    Object.keys(this.checkoutForm.controls).forEach((key) => {
      const controlErrors: any = this.checkoutForm.get(key)?.errors;
      if (controlErrors != null) {
        Object.keys(controlErrors).forEach((keyError) => {
          this.validationErrors.push(keyError);
        });
      } else {
        console.log('controlErrors is null');
      }
    });
  }

  public getCustomerFromForm(): Customer {
    return new Customer()
      .withFirstName(this.firstName?.value)
      .withLastName(this.lastName?.value)
      .withEmail(this.email?.value);
  }

  public getBillingAddressFromForm(): Address {
    return new Address()
      .withCity(this.billingCity?.value)
      .withCountry(this.billingCountry?.value)
      .withState(this.billingState?.value)
      .withStreet(this.billingStreet?.value)
      .withZipCode(this.billingZipCode?.value);
  }

  public getShippingAddressFromForm(): Address {
    return new Address()
      .withCity(this.city?.value)
      .withCountry(this.country?.value)
      .withState(this.state?.value)
      .withStreet(this.street?.value)
      .withZipCode(this.zipCode?.value);
  }

  public getCreditCardFromForm(): CreditCard {
    return new CreditCard()
      .withCardHolderName(this.cardHolderName?.value)
      .withCardNumber(this.cardNumber?.value)
      .withExpirationMonth(this.cardExpirationMonth?.value)
      .withExpirationYear(this.cardExpirationYear?.value)
      .withSecurityCode(this.cardSecurityCode?.value)
      .withCardType(this.cardType?.value);
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

  public get street() {
    return this.checkoutForm.get('address.street');
  }

  public get city() {
    return this.checkoutForm.get('address.city');
  }

  public get state() {
    return this.checkoutForm.get('address.state');
  }

  public get zipCode() {
    return this.checkoutForm.get('address.zipCode');
  }

  public get country() {
    return this.checkoutForm.get('address.country');
  }

  public get billingStreet() {
    return this.checkoutForm.get('billingAddress.street');
  }

  public get billingCity() {
    return this.checkoutForm.get('billingAddress.city');
  }

  public get billingState() {
    return this.checkoutForm.get('billingAddress.state');
  }

  public get billingZipCode() {
    return this.checkoutForm.get('billingAddress.zipCode');
  }

  public get billingCountry() {
    return this.checkoutForm.get('billingAddress.country');
  }

  public get cardNumber() {
    return this.checkoutForm.get('creditCard.cardNumber');
  }

  public get cardHolderName() {
    return this.checkoutForm.get('creditCard.cardHolderName');
  }

  public get cardExpirationMonth() {
    return this.checkoutForm.get('creditCard.cardExpirationMonth');
  }

  public get cardExpirationYear() {
    return this.checkoutForm.get('creditCard.cardExpirationYear');
  }

  public get cardSecurityCode() {
    return this.checkoutForm.get('creditCard.cardSecurityCode');
  }

  public get cardType() {
    return this.checkoutForm.get('creditCard.cardType');
  }
}
