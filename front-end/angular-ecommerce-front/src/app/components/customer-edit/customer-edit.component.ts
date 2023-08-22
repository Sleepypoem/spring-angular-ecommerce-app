import { AuthenticationService } from './../../services/authentication.service';
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/dtos/customer';
import { CustomerService } from 'src/app/services/customer.service';
import { customerForm } from 'src/config/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css'],
})
export class CustomerEditComponent {
  customerForm: any = customerForm;
  formGroup: FormGroup;
  image: string;
  customerId: string;
  customer: Customer;
  submitted: boolean = false;

  constructor(
    private customerService: CustomerService,
    private router: Router,
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService
  ) {
    this.buildForm();
    this.disableEmailField();
  }

  ngOnInit(): void {
    this.customerId = this.route.snapshot.paramMap.get('id')!;
    this.customerService
      .getCustomerById(this.customerId)
      .subscribe((customer) => {
        this.customer = customer;
        this.formGroup.patchValue({
          customer: customer,
        });
      });
  }

  private disableEmailField() {
    this.customerForm[2].disabled = true;
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
    customer.id = Number(this.customerId);
    customer.image = this.customer.image;
    this.makeRequest(customer);
  }

  makeRequest(customer: Customer) {
    this.customerService.updateCustomer(customer.id!, customer).subscribe(
      (response) => {
        this.authenticationService.updateUser(response);
        this.router.navigate(['customer/details']);
      },
      (error) => {
        alert('User update failed');
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
