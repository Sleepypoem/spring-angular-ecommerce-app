import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CartStatusComponent } from './components/cart-status/cart-status.component';
import { CategorySidebarComponent } from './components/category-sidebar/category-sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchFormComponent } from './components/search-form/search-form.component';

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
