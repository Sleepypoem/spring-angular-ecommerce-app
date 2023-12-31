import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-status',
  templateUrl: './cart-status.component.html',
  styleUrls: ['./cart-status.component.css'],
})
export class CartStatusComponent {
  totalPrice: number = 0.0;

  totalQuantity: number = 0;

  public open: boolean = false;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.updateCartStatus();
  }

  updateCartStatus() {
    this.cartService.totalPrice.subscribe((value) => (this.totalPrice = value));
    this.cartService.totalQuantity.subscribe(
      (value) => (this.totalQuantity = value)
    );
    this.cartService.totalPrice.subscribe({
      next: (data) => {
        this.showCart();
      },
    });
  }

  public showCart() {
    this.open = true;
    setTimeout(() => {
      this.open = false;
    }, 1500);
  }
}
