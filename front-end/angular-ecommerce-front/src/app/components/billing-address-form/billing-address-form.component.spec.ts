import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingAddressFormComponent } from './billing-address-form.component';

describe('BillingAddressFormComponent', () => {
  let component: BillingAddressFormComponent;
  let fixture: ComponentFixture<BillingAddressFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BillingAddressFormComponent]
    });
    fixture = TestBed.createComponent(BillingAddressFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
