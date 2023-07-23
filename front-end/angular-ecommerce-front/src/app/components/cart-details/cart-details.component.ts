import { Component } from '@angular/core';
import { CartItem } from 'src/app/dtos/cartItem';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css'],
})
export class CartDetailsComponent {
  cartItems: CartItem[] = [];
  totalPrice: number = 0;
  totalQuantity: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.listCartDetails();
  }

  listCartDetails(): void {
    this.cartItems = this.cartService.cartItems;

    this.cartService.totalPrice.subscribe((data) => (this.totalPrice = data));

    this.cartService.totalQuantity.subscribe(
      (data) => (this.totalQuantity = data)
    );

    this.cartService.computeCartTotals();
  }

  incrementQuantity(cartItem: CartItem) {
    this.cartService.modifyCartItemQuantity(cartItem, cartItem.quantity + 1);

    this.listCartDetails();
  }

  decrementQuantity(cartItem: CartItem) {
    this.cartService.modifyCartItemQuantity(cartItem, cartItem.quantity - 1);

    this.listCartDetails();
  }

  remove(cartItem: CartItem) {
    this.cartService.removeFromCart(cartItem);

    this.listCartDetails();
  }
}
