import { OktaAuth } from '@okta/okta-auth-js';
import { OKTA_AUTH, OktaAuthStateService } from '@okta/okta-angular';
import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { Customer } from 'src/app/dtos/customer';
import { NavigationEnd, Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login-status',
  templateUrl: './login-status.component.html',
  styleUrls: ['./login-status.component.css'],
})
export class LoginStatusComponent {
  isAuthenticated: boolean = false;
  sessionStorage: Storage = sessionStorage;
  customer: Customer;
  imageServerUrl = environment.imageServerUrl;
  userMenuOpen: boolean = false;

  constructor(
    private authService: OktaAuthStateService,
    @Inject(OKTA_AUTH) private oktaAuth: OktaAuth,
    private customerService: CustomerService,
    private router: Router,
    private myAuthService: AuthenticationService
  ) {
    router.events.subscribe((event) => (this.userMenuOpen = false));
  }

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
            this.myAuthService.login(data);
          });
      });
    }

    this.myAuthService.loggedInUser$.subscribe((user) => {
      this.customer = user!;
    });
  }

  logout() {
    this.oktaAuth.signOut();
    this.sessionStorage.clear();
    this.myAuthService.logout();
  }

  navigateToUrl(url: string, reload: boolean = false) {
    this.router.navigateByUrl(url).then(() => {
      if (reload) {
        window.location.reload();
      }
    });
  }

  public blur() {
    this.userMenuOpen = false;
  }

  public toggleOpen() {
    this.userMenuOpen = !this.userMenuOpen;
  }
}
