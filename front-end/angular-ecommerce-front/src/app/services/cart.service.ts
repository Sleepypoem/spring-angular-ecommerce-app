import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../dtos/cartItem';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems: CartItem[] = [];

  totalPrice: BehaviorSubject<number> = new BehaviorSubject<number>(0.0);

  totalQuantity: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor() {}

  addToCart(cartItem: CartItem) {
    const index: number = this.cartItems.findIndex(
      (item) => item.product.id === cartItem.product.id
    );
    if (index >= 0) {
      this.cartItems[index].quantity += cartItem.quantity;
    } else {
      this.cartItems.push(cartItem);
    }
    this.computeCartTotals();
  }

  computeCartTotals() {
    let totalPriceValue = 0;
    let totalQuantityValue = 0;

    for (const item of this.cartItems) {
      totalPriceValue += item.quantity * item.product.price;
      totalQuantityValue += item.quantity;
    }
    this.totalPrice.next(totalPriceValue);
    this.totalQuantity.next(totalQuantityValue);
  }

  removeFromCart(cartItem: CartItem) {
    const index: number = this.cartItems.findIndex(
      (item) => item.product.id === cartItem.product.id
    );
    if (index >= 0) {
      this.cartItems.splice(index, 1);
    }
    this.computeCartTotals();
  }

  modifyCartItemQuantity(cartItem: CartItem, newQuantity: number) {
    if (newQuantity == 0) {
      return;
    }
    const index: number = this.cartItems.findIndex(
      (item) => item.product.id === cartItem.product.id
    );
    if (index >= 0) {
      this.cartItems[index].quantity = newQuantity;
    }
    this.computeCartTotals();
  }

  cleanCart() {
    this.cartItems = [];
    this.computeCartTotals();
  }
}
