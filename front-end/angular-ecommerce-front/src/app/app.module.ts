import { HttpClientModule } from '@angular/common/http';
import { Injector, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule, Router } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { CartStatusComponent } from './components/cart-status/cart-status.component';
import { CategorySidebarComponent } from './components/category-sidebar/category-sidebar.component';
import { CheckoutFormComponent } from './components/checkout-form/checkout-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { CategoryService } from './services/category.service';
import { ProductService } from './services/product.service';
import { LoginComponent } from './components/login/login.component';
import { LoginStatusComponent } from './components/login-status/login-status.component';
import oktaConfig from '../config/auth-server-config';
import {
  OktaAuthModule,
  OktaCallbackComponent,
  OKTA_CONFIG,
  OktaAuthGuard,
} from '@okta/okta-angular';

import { OktaAuth } from '@okta/okta-auth-js';
import { MembershipsComponent } from './components/memberships/memberships.component';

const oktaConfigObject = oktaConfig.oidc;

const oktaAuth = new OktaAuth(oktaConfigObject);

function redirectToLoginPage(oktaAuth: OktaAuth, injector: Injector) {
  const router = injector.get(Router);
  router.navigate(['/login']);
}

const routes: Routes = [
  { path: 'login/callback', component: OktaCallbackComponent },
  { path: 'login', component: LoginComponent },
  { path: 'search/:name', component: ProductListComponent },
  { path: 'category/:id', component: ProductListComponent },
  { path: 'products/:id', component: ProductDetailComponent },
  {
    path: 'memberships',
    component: MembershipsComponent,
    canActivate: [OktaAuthGuard],
    data: { onAuthRequired: redirectToLoginPage },
  },
  { path: 'cart', component: CartDetailsComponent },
  { path: 'checkout', component: CheckoutFormComponent },
  { path: 'category', component: ProductListComponent },
  { path: 'products', component: ProductListComponent },
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: '**', redirectTo: '/products', pathMatch: 'full' },
];
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    NavbarComponent,
    CategorySidebarComponent,
    SearchFormComponent,
    ProductDetailComponent,
    CartStatusComponent,
    CartDetailsComponent,
    CheckoutFormComponent,
    LoginComponent,
    LoginStatusComponent,
    MembershipsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    OktaAuthModule,
  ],
  exports: [RouterModule],
  providers: [
    ProductService,
    CategoryService,
    { provide: OKTA_CONFIG, useValue: { oktaAuth } },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
