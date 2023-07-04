import { Category } from '../category';
import { CategoryService } from './../services/category.service';
import { Component } from '@angular/core';

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
