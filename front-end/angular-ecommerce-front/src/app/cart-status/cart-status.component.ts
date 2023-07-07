import { CartService } from './../services/cart.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cart-status',
  templateUrl: './cart-status.component.html',
  styleUrls: ['./cart-status.component.css'],
})
export class CartStatusComponent {
  totalPrice: number = 0.0;

  totalQuantity: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.updateCartStatus();
  }

  updateCartStatus() {
    this.cartService.totalPrice.subscribe((value) => (this.totalPrice = value));
    this.cartService.totalQuantity.subscribe(
      (value) => (this.totalQuantity = value)
    );
  }
}
