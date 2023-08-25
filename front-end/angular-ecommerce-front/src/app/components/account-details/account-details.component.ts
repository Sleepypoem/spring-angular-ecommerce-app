import { AuthenticationService } from './../../services/authentication.service';
import { Component } from '@angular/core';
import { Customer } from 'src/app/dtos/customer';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css'],
})
export class AccountDetailsComponent {
  customer: Customer;
  imageServerUrl: string = environment.imageServerUrl;

  constructor(private authenticationService: AuthenticationService) {
    this.authenticationService.loggedInUser$.subscribe((user) => {
      this.customer = user!;
    });
  }
}
