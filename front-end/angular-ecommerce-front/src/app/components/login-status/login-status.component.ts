import { OktaAuth } from '@okta/okta-auth-js';
import { OKTA_AUTH, OktaAuthStateService } from '@okta/okta-angular';
import { Component, Inject } from '@angular/core';
import { Customer } from 'src/app/dtos/customer';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login-status',
  templateUrl: './login-status.component.html',
  styleUrls: ['./login-status.component.css'],
})
export class LoginStatusComponent {
  isAuthenticated: boolean = false;
  username: string = '';
  userImage: string =
    'spring-angular-ecommerce/assets/images/vyspi9t7uokt16nsym91';
  sessionStorage: Storage = sessionStorage;
  customer: Customer;
  imageServerUrl = environment.imageServerUrl;

  constructor(
    private authService: OktaAuthStateService,
    @Inject(OKTA_AUTH) private oktaAuth: OktaAuth,
    private customerService: CustomerService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authService.authState$.subscribe((result) => {
      this.isAuthenticated = result.isAuthenticated!;
      this.getUserDetails();
    });
  }

  getUserDetails(): void {
    if (this.isAuthenticated) {
      this.oktaAuth.getUser().then((user) => {
        this.customerService
          .getCustomerByEmail(user.email!)
          .subscribe((data) => {
            this.userImage = data.image!;
            this.sessionStorage.setItem('customer', JSON.stringify(data));
          });
        this.username = user.name!;
      });
    }

    this.customer = JSON.parse(
      this.sessionStorage.getItem('customer')!
    ) as Customer;
  }

  logout() {
    this.oktaAuth.signOut();
    this.sessionStorage.clear();
  }

  navigateToUrl(url: string) {
    this.router.navigateByUrl(url);
  }
}
