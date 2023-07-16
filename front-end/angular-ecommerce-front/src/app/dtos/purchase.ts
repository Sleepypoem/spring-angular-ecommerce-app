import { Customer } from './customer';
import { Order } from './order';

export class Purchase {
  constructor(public customer: Customer, public order: Order) {}
}
