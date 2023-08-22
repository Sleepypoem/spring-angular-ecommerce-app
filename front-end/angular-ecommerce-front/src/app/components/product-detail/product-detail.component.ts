import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from 'src/app/dtos/cartItem';
import { Product } from 'src/app/dtos/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent {
  productId: string = '';
  public product: Product;
  imageServerUrl: string = environment.imageServerUrl;

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
  }
}
