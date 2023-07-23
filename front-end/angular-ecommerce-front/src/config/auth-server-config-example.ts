export default {
  oidc: {
    clientId: 'paste your client id here',
    issuer: 'paste-your-okta-domain-here/oauth2/default',
    redirectUri: 'http://localhost:4200/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
  },
};
