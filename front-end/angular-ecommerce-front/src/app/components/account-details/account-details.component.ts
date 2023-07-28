import { Component } from '@angular/core';
import { Customer } from 'src/app/dtos/customer';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css'],
})
export class AccountDetailsComponent {
  customer: Customer;

  storage: Storage = sessionStorage;

  constructor() {
    this.customer = JSON.parse(this.storage.getItem('customer')!);
  }
}
