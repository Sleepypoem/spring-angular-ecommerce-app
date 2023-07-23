import { Order } from 'src/app/dtos/order';
import { OrderService } from './../../services/order.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css'],
})
export class OrderHistoryComponent {
  orders: Order[] = [];
  sessionStorage: Storage = sessionStorage;

  constructor(private orderService: OrderService) {}

  ngOnInit() {
    this.listOrders();
  }

  listOrders() {
    let email = JSON.parse(this.sessionStorage.getItem('customer')!).email;
    this.orderService.getOrdersByCustomerEmail(email).subscribe((data) => {
      this.orders = data;
    });
  }
}
