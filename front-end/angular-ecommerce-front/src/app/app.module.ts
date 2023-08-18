import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
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
import { OrderHistoryComponent } from './components/order-history/order-history.component';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { CreditCardFormComponent } from './components/credit-card-form/credit-card-form.component';
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { DragNDropDirective } from './directives/drag-n-drop.directive';
import { DinamicFormComponent } from './components/dinamic-form/dinamic-form.component';
import { DinamicFormFieldComponent } from './components/dinamic-form-field/dinamic-form-field.component';
import { InvalidMessageDirective } from './directives/invalid-message.directive';
import { DragNDropComponent } from './components/drag-n-drop/drag-n-drop.component';
import { BillingAddressFormComponent } from './components/billing-address-form/billing-address-form.component';
import { AddressFormComponent } from './components/address-form/address-form.component';
import { CustomerRegisterComponent } from './components/customer-register/customer-register.component';
import { CustomerEditComponent } from './components/customer-edit/customer-edit.component';

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
  {
    path: 'orders',
    component: OrderHistoryComponent,
    canActivate: [OktaAuthGuard],
    data: { onAuthRequired: redirectToLoginPage },
  },
  {
    path: 'customer/details',
    component: AccountDetailsComponent,
    canActivate: [OktaAuthGuard],
    data: { onAuthRequired: redirectToLoginPage },
  },
  {
    path: 'customer/signup',
    component: CustomerRegisterComponent,
  },
  {
    path: 'customer/edit/:id',
    component: CustomerEditComponent,
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
    OrderHistoryComponent,
    BillingAddressFormComponent,
    AddressFormComponent,
    CreditCardFormComponent,
    AccountDetailsComponent,
    DragNDropDirective,
    InvalidMessageDirective,
    DinamicFormComponent,
    DinamicFormFieldComponent,
    DragNDropComponent,
    CustomerRegisterComponent,
    CustomerEditComponent,
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
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
