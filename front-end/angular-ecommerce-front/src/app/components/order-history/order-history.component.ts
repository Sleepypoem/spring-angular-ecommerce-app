import { AuthenticationService } from 'src/app/services/authentication.service';
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

  constructor(
    private orderService: OrderService,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit() {
    this.listOrders();
  }

  listOrders() {
    this.authenticationService.loggedInUser$.subscribe((user) => {
      this.orderService
        .getOrdersByCustomerEmail(user?.email!)
        .subscribe((data) => {
          this.orders = data;
        });
    });
  }
}
