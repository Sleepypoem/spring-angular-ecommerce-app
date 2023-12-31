import { Component, Inject } from '@angular/core';
import { OKTA_AUTH } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';
import OktaSignIn from '@okta/okta-signin-widget';

import oktaConfig from '../../../config/auth-server-config';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  oktaSignIn: any;

  constructor(@Inject(OKTA_AUTH) public oktaAuth: OktaAuth) {
    this.oktaSignIn = new OktaSignIn({
      baseUrl: oktaConfig.oidc.issuer.split('/oauth2')[0],
      clientId: oktaConfig.oidc.clientId,
      //VERY IMPORTANT: In Okta Sign-In Widget version 7+, Okta Identity Engine is enabled by default. If you are using version 7+ and want to use Okta Classic Engine rather than Identity Engine, you need to specify useClassicEngine: true
      useClassicEngine: true,
      redirectUri: oktaConfig.oidc.redirectUri,
      logo: 'assets/images/logo/logo.jpg',
      authParams: {
        pkce: true,
        issuer: oktaConfig.oidc.issuer,
        scopes: oktaConfig.oidc.scopes,
      },
    });
  }

  ngOnInit() {
    this.oktaSignIn.remove();

    this.oktaSignIn
      .showSignInAndRedirect({
        el: '#okta-login-container',
      })
      .catch(function (error: any) {
        throw error;
      });
  }
}
