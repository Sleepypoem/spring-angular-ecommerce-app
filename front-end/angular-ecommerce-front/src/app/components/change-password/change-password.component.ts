import { CustomerService } from './../../services/customer.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'src/app/dtos/customer';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { passwordChangeForm } from 'src/config/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
})
export class ChangePasswordComponent {
  formGroup: FormGroup;
  loggedCustomer: Customer;
  passwordForm: any = passwordChangeForm;
  submitted: boolean = false;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private customerService: CustomerService
  ) {
    this.authenticationService.loggedInUser$.subscribe((user) => {
      this.loggedCustomer = user!;
    });
  }

  ngOnInit() {
    this.buildForm();
  }

  public buildForm() {
    this.formGroup = new FormGroup({});
  }

  public onSubmit() {
    this.formGroup.updateValueAndValidity();
    if (this.formGroup.invalid) {
      this.markAllSubformsAsTouched(this.formGroup);
      return;
    }
    this.submitted = true;
    this.customerService
      .changeCustomerPassword(
        this.loggedCustomer.id + '',
        this.loggedCustomer.email!,
        this.oldPassword!,
        this.newPassword
      )
      .subscribe(
        () => {
          alert('Password changed successfully!');
          this.router.navigate(['/customer/details']);
        },
        (err) => {
          alert(
            'Error while changing password, error description: ' +
              err.error.errorCauses[0].errorSummary
          );
          this.submitted = false;
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

  public get oldPassword() {
    return this.formGroup.get('passwordChange')?.get('oldPassword')?.value;
  }

  public get newPassword() {
    return this.formGroup.get('passwordChange')?.get('password')?.value;
  }
}
