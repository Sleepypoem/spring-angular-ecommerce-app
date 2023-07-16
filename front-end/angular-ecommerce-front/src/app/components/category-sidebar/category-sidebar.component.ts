import { Component } from '@angular/core';
import { Category } from 'src/app/dtos/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-sidebar',
  templateUrl: './category-sidebar.component.html',
  styleUrls: ['./category-sidebar.component.css'],
})
export class CategorySidebarComponent {
  constructor(private categoryService: CategoryService) {}

  categories: Category[] = [];

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    return this.categoryService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }
}
