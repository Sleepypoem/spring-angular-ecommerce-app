import { environment } from 'src/environments/environment';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Address } from 'src/app/dtos/address';
import { CreditCard } from 'src/app/dtos/creditCard';
import { Customer } from 'src/app/dtos/customer';
import { Order } from 'src/app/dtos/order';
import { Purchase } from 'src/app/dtos/purchase';
import { CartService } from 'src/app/services/cart.service';
import { CheckoutService } from 'src/app/services/checkout.service';
import { customerForm } from 'src/config/forms';
import { PaymentInfo } from 'src/app/dtos/paymentInfo';
declare var Stripe: any;
@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css'],
})
export class CheckoutFormComponent {
  formGroup: FormGroup;
  loggedCustomer: Customer;
  customer: any = customerForm;
  sessionStorage: Storage = sessionStorage;
  totalPrice: number = 0.0;
  submitted: boolean = false;
  stripe: any = Stripe(environment.stripePk, { locale: 'en' });
  paymentInfo: PaymentInfo;
  cardElement: any;
  displayError: any = '';

  totalQuantity: number = 0;

  constructor(
    private checkoutService: CheckoutService,
    private cartService: CartService,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.loggedInUser$.subscribe((user) => {
      this.loggedCustomer = user!;
    });
  }

  ngOnInit() {
    this.buildForm();
    this.setupStripePaymentForm();
    this.updateCartReviewDetails();
  }

  public buildForm() {
    this.formGroup = new FormGroup({});
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
      this.formGroup.controls['billingAddress'].setValue(
        this.formGroup.get('address')?.value
      );
    } else {
      this.formGroup.controls['billingAddress'].reset();
      this.formGroup.controls['billingAddress']?.get('country')?.setValue('US');
    }
  }

  private setupStripePaymentForm() {
    this.cardElement = this.stripe
      .elements()
      .create('card', { hidePostalCode: true });
    this.cardElement.mount('#card-element');
    this.cardElement.addEventListener('change', (event: any) => {
      this.displayError = document.getElementById('card-errors');
      if (event.complete) {
        this.displayError.textContent = '';
      } else {
        this.displayError.textContent = event.error.message;
      }
    });
  }

  public onSubmit() {
    if (this.loggedCustomer != null) {
      this.formGroup.controls['customer']?.disable();
    }
    this.formGroup.updateValueAndValidity();
    if (this.formGroup.invalid) {
      this.markAllSubformsAsTouched(this.formGroup);
      console.log(this.formGroup);
      return;
    }
    this.submitted = true;
    this.paymentInfo = new PaymentInfo(
      Math.round(this.totalPrice * 100),
      'USD'
    );
    let customer = this.customerFromForm;
    let order = this.prepareOrder();
    let purchase = new Purchase(customer, order);
    this.checkoutService.createPaymentIntent(this.paymentInfo).subscribe({
      next: (response) => {
        this.stripe
          .confirmCardPayment(
            response.client_secret,
            {
              payment_method: {
                card: this.cardElement,
                billing_details: {
                  email: customer.email,
                  name: customer.firstName + ' ' + customer.lastName,
                  address: {
                    line1: purchase?.order?.billingAddress?.street,
                    city: purchase?.order?.billingAddress?.city,
                    state: purchase?.order?.billingAddress?.state,
                    country: purchase?.order?.billingAddress?.country,
                    postal_code: purchase?.order?.billingAddress?.zipCode,
                  },
                },
              },
            },
            { handleActions: false }
          )
          .then((result: any) => {
            if (result.error) {
              alert('Payment failed: ' + result.error.message);
            } else {
              this.placeOrder(purchase);
              console.log('Payment succeeded!');
            }
          });
      },
      error: (err) => {
        alert('Error while placing order: ' + err.error.message);
      },
    });
  }

  public placeOrder(purchase: Purchase) {
    this.checkoutService.makeOrder(purchase).subscribe({
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

  private prepareOrder() {
    return new Order()
      .withTotalPrice(this.totalPrice)
      .withTotalQuantity(this.totalQuantity)
      .withItems(this.cartService.cartItems)
      .withShippingAddress(this.addressFromForm)
      .withBillingAddress(this.billingAddressFromForm);
  }

  private markAllSubformsAsTouched(formGroup: any) {
    if (formGroup.controls == null) {
      return;
    }
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);
      if (control instanceof FormGroup) {
        this.markAllSubformsAsTouched(control);
      } else if (control instanceof FormControl) {
        control.markAsTouched();
        control.markAsDirty();
      }
    });
  }

  get billingAddressFromForm(): Address {
    return this.formGroup.get('billingAddress')?.value;
  }

  get addressFromForm(): Address {
    return this.formGroup.get('address')?.value;
  }

  get customerFromForm(): Customer {
    if (this.loggedCustomer != null) {
      return this.loggedCustomer;
    }
    return this.formGroup.get('customer')?.value;
  }

  get creditCardFromForm(): CreditCard {
    return this.formGroup.get('creditCard')?.value;
  }
}
