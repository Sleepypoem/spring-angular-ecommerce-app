import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorySidebarComponent } from './category-sidebar.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CategorySidebarComponent', () => {
  let component: CategorySidebarComponent;
  let fixture: ComponentFixture<CategorySidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [CategorySidebarComponent],
    });
    fixture = TestBed.createComponent(CategorySidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
