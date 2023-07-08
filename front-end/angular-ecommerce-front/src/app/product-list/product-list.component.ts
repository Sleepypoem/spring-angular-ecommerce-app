import { CartService } from './../services/cart.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from './../product';
import { ProductService } from './../services/product.service';
import { Component } from '@angular/core';
import { CartItem } from '../cartItem';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products: Product[] = [];

  page: number = 1;
  pageSize: number = 5;
  totalRecords: number = 0;
  totalPages: number = 0;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

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
    this.cartService.addToCart(new CartItem(product, 1));
  }

  getProductsByCategoryPaginated(
    categoryId: string,
    page: number,
    pageSize: number
  ) {
    this.productService
      .getProductsByCategoryPaginated(categoryId, page, pageSize)
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

  getProductsByNameLikePaginated(
    productName: string,
    page: number,
    pageSize: number
  ) {
    this.productService
      .getProductsByNameLikePaginated(productName, page, pageSize)
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

  getProductsPaginated(page: number, pageSize: number) {
    this.productService
      .getProductsPaginated(page, pageSize)
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

  getProducts(): void {
    const categoryId = this.route.snapshot.paramMap.get('id');
    const productName = this.route.snapshot.paramMap.get('name');
    if (categoryId != null) {
      this.getProductsByCategoryPaginated(
        categoryId,
        this.page - 1,
        this.pageSize
      );
    } else if (productName != null) {
      this.getProductsByNameLikePaginated(
        productName,
        this.page - 1,
        this.pageSize
      );
    } else {
      this.getProductsPaginated(this.page - 1, this.pageSize);
    }
  }
}
