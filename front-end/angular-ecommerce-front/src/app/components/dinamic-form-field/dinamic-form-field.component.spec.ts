import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinamicFormFieldComponent } from './dinamic-form-field.component';

describe('DinamicFormFieldComponent', () => {
  let component: DinamicFormFieldComponent;
  let fixture: ComponentFixture<DinamicFormFieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DinamicFormFieldComponent]
    });
    fixture = TestBed.createComponent(DinamicFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
