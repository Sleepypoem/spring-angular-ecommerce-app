import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CategoryService } from './services/category.service';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { CartStatusComponent } from './components/cart-status/cart-status.component';
import { CategorySidebarComponent } from './components/category-sidebar/category-sidebar.component';
import { CheckoutFormComponent } from './components/checkout-form/checkout-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SearchFormComponent } from './components/search-form/search-form.component';

const routes: Routes = [
  { path: 'search/:name', component: ProductListComponent },
  { path: 'category/:id', component: ProductListComponent },
  { path: 'products/:id', component: ProductDetailComponent },
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
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [RouterModule],
  providers: [ProductService, CategoryService],
  bootstrap: [AppComponent],
})
export class AppModule {}
