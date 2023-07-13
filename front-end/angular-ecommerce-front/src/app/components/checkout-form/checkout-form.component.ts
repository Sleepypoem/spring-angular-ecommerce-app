import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICountry, IState } from 'country-state-city';
import { AddressService } from 'src/app/services/address.service';
import { CartService } from 'src/app/services/cart.service';
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

  constructor(
    private formBuilder: FormBuilder,
    private addressService: AddressService,
    private cartService: CartService
  ) {
    this.countries = this.addressService.getCountries();
  }

  ngOnInit() {
    this.checkoutForm = this.formBuilder.group({
      customer: this.formBuilder.group({
        firstName: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(20),
            CustomValidators.notOnlyBlankSpaces,
          ],
        ],
        lastName: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(20),
            CustomValidators.notOnlyBlankSpaces,
          ],
        ],
        email: [
          '',
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
          [Validators.required],
          CustomValidators.notOnlyBlankSpaces,
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
        cardExpirationMonth: ['', [Validators.required]],
        cardExpirationYear: ['', [Validators.required]],
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
    this.checkoutForm.markAllAsTouched();
    console.log('purchase dto: ', {
      customer: {
        firstName: this.checkoutForm.get('customer.firstName')?.value,
        lastName: this.checkoutForm.get('customer.lastName')?.value,
        email: this.checkoutForm.get('customer.email')?.value,
      },
      order: {
        shippingAddress: {
          country: this.checkoutForm.get('address.country')?.value,
          state: this.checkoutForm.get('address.state')?.value,
          city: this.checkoutForm.get('address.city')?.value,
          street: this.checkoutForm.get('address.street')?.value,
          zipCode: this.checkoutForm.get('address.zipCode')?.value,
        },
        billingAddress: {
          country: this.checkoutForm.get('billingAddress.country')?.value,
          state: this.checkoutForm.get('billingAddress.state')?.value,
          city: this.checkoutForm.get('billingAddress.city')?.value,
          street: this.checkoutForm.get('billingAddress.street')?.value,
          zipCode: this.checkoutForm.get('billingAddress.zipCode')?.value,
        },
        items: this.cartService.cartItems,
        totalPrice: this.totalPrice,
        totalQuantity: this.totalQuantity,
        // creditCard: {
        //   cardNumber: this.checkoutForm.get('creditCard.cardNumber')?.value,
        //   cardHolderName: this.checkoutForm.get('creditCard.cardHolderName')
        //     ?.value,
        //   cardExpirationMonth: this.checkoutForm.get(
        //     'creditCard.cardExpirationMonth'
        //   )?.value,
        //   cardExpirationYear: this.checkoutForm.get(
        //     'creditCard.cardExpirationYear'
        //   )?.value,
        //   cardSecurityCode: this.checkoutForm.get('creditCard.cardSecurityCode')
        //     ?.value,
        // },
      },
    });
    console.warn(this.checkoutForm?.get('customer')?.value);
    console.warn(this.checkoutForm?.get('address')?.value);
    console.warn(this.checkoutForm?.get('billingAddress')?.value);
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
