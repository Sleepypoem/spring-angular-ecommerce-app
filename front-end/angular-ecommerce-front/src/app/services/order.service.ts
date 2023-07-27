import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Order } from '../dtos/order';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private baseUrl: string = environment.backendUrl + 'orders';

  constructor(private http: HttpClient) {}

  getOrders(): Observable<Order[]> {
    return this.http
      .get<getOrderResponse>(this.baseUrl + '?size=100')
      .pipe(map((response) => response._embedded.orders));
  }

  getOrdersPaginated(page: number, size: number): Observable<Order[]> {
    return this.http
      .get<getOrderResponse>(this.baseUrl + '?page=' + page + '&size=' + size)
      .pipe(map((response) => response._embedded.orders));
  }

  getOrder(id: string): Observable<Order> {
    return this.http.get<Order>(this.baseUrl + '/' + id);
  }

  getOrdersByCustomerEmail(email: string): Observable<Order[]> {
    return this.http
      .get<getOrderResponse>(
        this.baseUrl +
          '/search/findAllByCustomerEmailOrderByCreatedAtDesc?email=' +
          email +
          '&size=100'
      )
      .pipe(map((response) => response._embedded.orders));
  }

  getOrdersByCustomerEmailPaginated(
    email: string,
    page: number,
    size: number
  ): Observable<Order[]> {
    return this.http
      .get<getOrderResponse>(
        this.baseUrl +
          '/search/findAllByCustomerEmailOrderByCreatedAtDesc?email=' +
          email +
          '&page=' +
          page +
          '&size=100'
      )
      .pipe(map((response) => response._embedded.orders));
  }
}

interface getOrderResponse {
  _embedded: {
    orders: Order[];
  };
  page: {
    size: number;
    totalElements: number;
    totalPages: number;
    number: number;
  };
}
