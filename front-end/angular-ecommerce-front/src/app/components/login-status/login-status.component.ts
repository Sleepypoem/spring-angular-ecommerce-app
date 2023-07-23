import { OktaAuth } from '@okta/okta-auth-js';
import { OKTA_AUTH, OktaAuthStateService } from '@okta/okta-angular';
import { Component, Inject } from '@angular/core';
import { Customer } from 'src/app/dtos/customer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-status',
  templateUrl: './login-status.component.html',
  styleUrls: ['./login-status.component.css'],
})
export class LoginStatusComponent {
  isAuthenticated: boolean = false;
  username: string = '';
  sessionStorage: Storage = sessionStorage;

  constructor(
    private authService: OktaAuthStateService,
    @Inject(OKTA_AUTH) private oktaAuth: OktaAuth,
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
        let customer = new Customer()
          .withFirstName(user.given_name!)
          .withLastName(user.family_name!)
          .withEmail(user.email!);
        this.sessionStorage.setItem('customer', JSON.stringify(customer));
        this.username = user.name!;
      });
    }
  }

  logout() {
    this.oktaAuth.signOut();
    this.sessionStorage.clear();
  }

  navigateToUrl(url: string) {
    this.router.navigateByUrl(url);
  }
}
