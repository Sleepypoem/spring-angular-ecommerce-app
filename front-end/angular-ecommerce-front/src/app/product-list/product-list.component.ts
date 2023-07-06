import { ActivatedRoute } from '@angular/router';
import { Product } from './../product';
import { ProductService } from './../services/product.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products: Product[] = [];

  categoryId: string = '1';

  productName: string = '';

  page: number = 1;
  pageSize: number = 5;
  totalRecords: number = 0;
  totalPages: number = 0;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {
    this.categoryId = this.route.snapshot.paramMap.get('id')!;
    this.productName = this.route.snapshot.paramMap.get('name')!;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.getProducts();
    });
  }

  setPageSize(pageSize: string): void {
    this.pageSize = +pageSize;
    this.page = 1;
    this.getProducts();
  }

  addProductToCart(product: Product) {
    console.log('adding product ' + product.name + ' to cart');
  }

  getProducts(): void {
    if (this.categoryId != null) {
      this.productService
        .getProductsByCategoryPaginated(
          this.categoryId,
          this.page - 1,
          this.pageSize
        )
        .subscribe(
          (data) => (
            (this.products = data._embedded.products),
            (this.totalRecords = data.page.totalElements),
            (this.totalPages = data.page.totalPages),
            (this.page = data.page.number + 1),
            (this.pageSize = data.page.size)
          )
        );
    } else if (this.productName != null) {
      this.productService
        .getProductsByNameLikePaginated(
          this.productName,
          this.page - 1,
          this.pageSize
        )
        .subscribe(
          (data) => (
            (this.products = data._embedded.products),
            (this.totalRecords = data.page.totalElements),
            (this.totalPages = data.page.totalPages),
            (this.page = data.page.number + 1),
            (this.pageSize = data.page.size)
          )
        );
    } else {
      this.productService
        .getProductsPaginated(this.page - 1, this.pageSize)
        .subscribe(
          (data) => (
            (this.products = data._embedded.products),
            (this.totalRecords = data.page.totalElements),
            (this.totalPages = data.page.totalPages),
            (this.page = data.page.number + 1),
            (this.pageSize = data.page.size)
          )
        );
    }
  }
}
