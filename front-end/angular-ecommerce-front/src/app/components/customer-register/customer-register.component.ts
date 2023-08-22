import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Component } from '@angular/core';
import { customerSignUpForm } from 'src/config/forms';
import { Customer } from 'src/app/dtos/customer';

@Component({
  selector: 'app-customer-register',
  templateUrl: './customer-register.component.html',
  styleUrls: ['./customer-register.component.css'],
})
export class CustomerRegisterComponent {
  customerForm: any = customerSignUpForm;
  formGroup: FormGroup;
  image: string;
  submitted: boolean = false;

  constructor(
    private customerService: CustomerService,
    private router: Router
  ) {
    this.buildForm();
  }

  private buildForm() {
    this.formGroup = new FormGroup({});
  }

  onSubmit() {
    this.formGroup.updateValueAndValidity();
    if (this.formGroup.invalid) {
      this.markAllSubformsAsTouched(this.formGroup);
      return;
    }
    this.submitted = true;
    let customer = this.customerFromForm;
    customer.encodedImage = this.image;
    this.makeRequest(customer);
  }

  makeRequest(customer: Customer) {
    this.customerService.addCustomer(customer).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/customer/login']);
      },
      (error) => {
        alert('Registration failed');
        console.log(error);
      }
    );
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

  receiveImage(event: any) {
    this.image = event;
  }

  get customerFromForm(): Customer {
    return this.formGroup.get('customer')?.value!;
  }
}
