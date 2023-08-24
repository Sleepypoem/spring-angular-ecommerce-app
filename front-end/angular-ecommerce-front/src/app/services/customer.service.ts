import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Customer } from '../dtos/customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private baseUrl = environment.backendUrl + 'customers';

  constructor(private httpClient: HttpClient) {}

  public getCustomerById(id: string): Observable<Customer> {
    return this.httpClient.get<Customer>(this.baseUrl + '/' + id);
  }

  public getCustomerByEmail(email: string): Observable<Customer> {
    return this.httpClient.get<Customer>(
      this.baseUrl + '/search/findByEmail?email=' + email
    );
  }

  public addCustomer(customer: Customer): Observable<Customer> {
    return this.httpClient.post<Customer>(this.baseUrl, customer);
  }

  public updateCustomer(
    customerId: number,
    customer: Customer
  ): Observable<Customer> {
    return this.httpClient.put<Customer>(
      this.baseUrl + '/' + customerId,
      customer
    );
  }

  public changeCustomerPassword(
    id: string,
    customerId: string,
    oldPassword: string,
    newPassword: string
  ) {
    return this.httpClient.patch(this.baseUrl + '/' + id, {
      customerId: customerId,
      oldPassword: oldPassword,
      newPassword: newPassword,
    });
  }
}

interface GetResponse {
  _embedded: {
    products: Customer[];
  };
  page: {
    size: number;
    totalElements: number;
    totalPages: number;
    number: number;
  };
}
