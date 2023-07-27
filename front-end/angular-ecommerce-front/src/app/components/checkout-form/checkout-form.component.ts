import { Customer } from './../../dtos/customer';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Address } from 'src/app/dtos/address';
import { CreditCard } from 'src/app/dtos/creditCard';
import { Order } from 'src/app/dtos/order';
import { Purchase } from 'src/app/dtos/purchase';
import { CartService } from 'src/app/services/cart.service';
import { CheckoutService } from 'src/app/services/checkout.service';
import { CustomerFormComponent } from '../customer-form/customer-form.component';
import { AddressFormComponent } from '../address-form/address-form.component';
import { CreditCardFormComponent } from '../credit-card-form/credit-card-form.component';
import { BillingAddressFormComponent } from '../billing-address-form/billing-address-form.component';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css'],
})
export class CheckoutFormComponent implements OnInit {
  @ViewChild(CustomerFormComponent, { static: true })
  public customerFormComponent: CustomerFormComponent;

  @ViewChild(AddressFormComponent, { static: true })
  public addressFormComponent: AddressFormComponent;

  @ViewChild(BillingAddressFormComponent, { static: true })
  public billingAddressFormComponent: BillingAddressFormComponent;

  @ViewChild(CreditCardFormComponent, { static: true })
  public creditCardFormComponent: CreditCardFormComponent;

  checkoutForm: FormGroup;

  totalPrice: number = 0.0;

  totalQuantity: number = 0;

  validationErrors: string[] = [];

  sessionStorage: Storage = sessionStorage;

  customer: Customer;

  constructor(
    private formBuilder: FormBuilder,
    private cartService: CartService,
    private checkouService: CheckoutService,
    private router: Router
  ) {
    this.customer = JSON.parse(this.sessionStorage.getItem('customer')!);
  }

  ngOnInit() {
    this.buildForm();
    this.updateCartReviewDetails();

    if (this.customer != null) {
      this.hideCustomerSection();
    }
  }

  private buildForm(): void {
    this.checkoutForm = this.formBuilder.group({
      customer: this.customerFormComponent.buildForm(),
      address: this.addressFormComponent.buildForm(),

      billingAddress: this.billingAddressFormComponent.buildForm(),
      creditCard: this.creditCardFormComponent.buildForm(),
    });
  }

  private hideCustomerSection(): void {
    this.checkoutForm.controls['customer'].disable();
  }

  updateCartReviewDetails() {
    this.cartService.totalPrice.subscribe((data) => (this.totalPrice = data));
    this.cartService.totalQuantity.subscribe(
      (data) => (this.totalQuantity = data)
    );
  }

  copyAddressToBillingAddress(event: any) {
    if (event.target.checked) {
      this.billingAddressFormComponent.addressForm.setValue(
        this.addressFormComponent.addressForm.value
      );
    } else {
      this.billingAddressFormComponent.resetValues();
    }
  }

  onSubmit() {
    if (this.checkoutForm.invalid) {
      this.markFieldsAndDisplayErrors();
      console.log(this.checkoutForm.value);
      return;
    }

    let purchase = this.preparePurchase();
    this.makeOrder(purchase);
  }

  private markFieldsAndDisplayErrors(): void {
    this.checkoutForm.markAllAsTouched();
    this.displayFormValidationErrors();
  }

  private preparePurchase(): Purchase {
    let customer = this.getCustomerFromForm();
    let order = new Order()
      .withShippingAddress(this.getShippingAddressFromForm())
      .withBillingAddress(this.getBillingAddressFromForm())
      .withItems(this.cartService.cartItems)
      .withTotalPrice(this.totalPrice)
      .withTotalQuantity(this.totalQuantity);

    return new Purchase(customer, order);
  }

  private makeOrder(purchase: Purchase): void {
    this.checkouService.makeOrder(purchase).subscribe({
      next: (response) => {
        alert(
          'Order placed successfully! tracking N0: ' +
            response.orderTrackingNumber
        );
        this.cleanCart();
      },
      error: (err) => {
        alert('Error while placing order: ' + err.message);
      },
    });
  }

  public cleanCart() {
    this.cartService.cleanCart();
    this.router.navigate(['/']);
  }

  private displayFormValidationErrors() {
    Object.keys(this.checkoutForm.controls).forEach((key) => {
      const controlErrors: any = this.checkoutForm.get(key)?.errors;
      if (controlErrors != null) {
        Object.keys(controlErrors).forEach((keyError) => {
          console.log(keyError);
        });
      } else {
        console.log('controlErrors is null');
      }
    });
  }

  public getCustomerFromForm(): Customer {
    if (this.customer != null) {
      return this.customer;
    }

    return new Customer()
      .withFirstName(this.customerFormComponent.firstName?.value)
      .withLastName(this.customerFormComponent.lastName?.value)
      .withEmail(this.customerFormComponent.email?.value);
  }

  public getBillingAddressFromForm(): Address {
    return new Address()
      .withCity(this.billingAddressFormComponent.city?.value)
      .withCountry(this.billingAddressFormComponent.country?.value)
      .withState(this.billingAddressFormComponent.state?.value)
      .withStreet(this.billingAddressFormComponent.street?.value)
      .withZipCode(this.billingAddressFormComponent.zipCode?.value);
  }

  public getShippingAddressFromForm(): Address {
    return new Address()
      .withCity(this.addressFormComponent.city?.value)
      .withCountry(this.addressFormComponent.country?.value)
      .withState(this.addressFormComponent.state?.value)
      .withStreet(this.addressFormComponent.street?.value)
      .withZipCode(this.addressFormComponent.zipCode?.value);
  }

  public getCreditCardFromForm(): CreditCard {
    return new CreditCard()
      .withCardHolderName(this.creditCardFormComponent.cardHolderName?.value)
      .withCardNumber(this.creditCardFormComponent.cardNumber?.value)
      .withExpirationMonth(
        this.creditCardFormComponent.cardExpirationMonth?.value
      )
      .withExpirationYear(
        this.creditCardFormComponent.cardExpirationYear?.value
      )
      .withSecurityCode(this.creditCardFormComponent.cardSecurityCode?.value)
      .withCardType(this.creditCardFormComponent.cardType?.value);
  }
}
