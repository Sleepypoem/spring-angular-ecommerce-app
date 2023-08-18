import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/dtos/customer';
import { CustomerService } from 'src/app/services/customer.service';
import { customerForm } from 'src/config/forms';

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
  sessionStorage: Storage = sessionStorage;

  constructor(
    private customerService: CustomerService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.buildForm();
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

  private buildForm() {
    this.formGroup = new FormGroup({});
  }

  onSubmit() {
    this.markAllSubformsAsTouched(this.formGroup);
    this.formGroup.updateValueAndValidity();
    let customer = this.customerFromForm;
    customer.encodedImage = this.image;
    customer.id = Number(this.customerId);
    customer.image = this.customer.image;
    this.makeRequest(customer);
  }

  makeRequest(customer: Customer) {
    this.customerService.updateCustomer(customer.id!, customer).subscribe(
      (response) => {
        console.log(response);
        this.sessionStorage.setItem('customer', JSON.stringify(customer));
        this.router.navigate(['/customer/details']);
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
