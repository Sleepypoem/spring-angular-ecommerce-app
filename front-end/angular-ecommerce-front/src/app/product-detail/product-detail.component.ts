import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../services/product.service';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent {
  productId: string = '';
  public product: Product = {} as Product;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('id')!;
    this.getProduct(this.productId);
  }

  getProduct(id: string) {
    this.productService
      .getProductById(id)
      .subscribe((product) => (this.product = product));
  }
}
