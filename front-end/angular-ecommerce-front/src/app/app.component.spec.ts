import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CategorySidebarComponent } from './category-sidebar/category-sidebar.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SearchFormComponent } from './search-form/search-form.component';
import { CartStatusComponent } from './cart-status/cart-status.component';

describe('AppComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [
        AppComponent,
        NavbarComponent,
        CategorySidebarComponent,
        SearchFormComponent,
        CartStatusComponent,
      ],
    })
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-ecommerce-front'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-ecommerce-front');
  });
});
