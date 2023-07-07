import { CartService } from './../services/cart.service';
import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from '../cartItem';

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
    private route: ActivatedRoute,
    private cartService: CartService
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

  addToCart() {
    this.cartService.addToCart(new CartItem(this.product, 1));
    alert('Product added to cart');
  }
}
