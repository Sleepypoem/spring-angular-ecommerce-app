import { Address } from './address';
import { CartItem } from './cartItem';

export class Order {
  orderTrackingNumber?: string;
  status?: string;
  totalPrice?: number;
  totalQuantity?: number;
  shippingAddress?: Address;
  billingAddress?: Address;
  items?: CartItem[];
  id?: number;
  createdAt?: string;
  updatedAt?: string;

  constructor() {}

  withId(id: number) {
    this.id = id;
    return this;
  }

  withOrderTrackingNumber(orderTrackingNumber: string) {
    this.orderTrackingNumber = orderTrackingNumber;
    return this;
  }

  withStatus(status: string) {
    this.status = status;
    return this;
  }

  withTotalPrice(totalPrice: number) {
    this.totalPrice = totalPrice;
    return this;
  }

  withTotalQuantity(totalQuantity: number) {
    this.totalQuantity = totalQuantity;
    return this;
  }

  withShippingAddress(shippingAddress: Address) {
    this.shippingAddress = shippingAddress;
    return this;
  }

  withBillingAddress(billingAddress: Address) {
    this.billingAddress = billingAddress;
    return this;
  }

  withItems(items: CartItem[]) {
    this.items = items;
    return this;
  }
}
