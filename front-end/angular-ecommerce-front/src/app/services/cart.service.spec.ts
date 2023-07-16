/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CartService } from './cart.service';
import { Product } from '../dtos/product';

describe('Service: Cart', () => {
  let cartService: CartService;
  let testProduct1: Product;
  let testProduct2: Product;

  beforeEach(() => {
    cartService = new CartService();
    testProduct1 = {
      id: 1,
      sku: 'TestProduct',
      name: 'test',
      description: 'test',
      image: '',
      stock: 10,
      price: 10,
    };
    testProduct2 = {
      id: 2,
      sku: 'TestProduct2',
      name: 'test2',
      description: 'test2',
      image: '',
      stock: 10,
      price: 10,
    };
    TestBed.configureTestingModule({
      providers: [CartService],
    });
  });

  it('should add items to the cart', () => {
    const cartItem = { product: testProduct1, quantity: 2 };

    cartService.addToCart(cartItem);

    expect(cartService.cartItems.length).toBe(1);
    expect(cartService.cartItems[0]).toEqual(cartItem);
  });

  it('should update the cart item quantity if the product already exists in the cart', () => {
    const existingCartItem = {
      product: testProduct1,
      quantity: 2,
    };
    const newCartItem = {
      product: testProduct1,
      quantity: 3,
    };
    cartService.cartItems = [existingCartItem];

    cartService.addToCart(newCartItem);

    expect(cartService.cartItems.length).toBe(1);
    expect(cartService.cartItems[0].quantity).toBe(5);
  });

  it('should ...', inject([CartService], (service: CartService) => {
    expect(service).toBeTruthy();
  }));
});
