import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../dtos/product';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl: string = 'http://localhost:8081/products';

  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.httpClient
      .get<GetResponse>(this.baseUrl + '?size=100')
      .pipe(map((response) => response._embedded.products));
  }

  getProductsPaginated(page: number, size: number): Observable<GetResponse> {
    const url = `${this.baseUrl}?page=${page}&size=${size}`;
    return this.httpClient.get<GetResponse>(url);
  }

  getProductsByCategory(category: string): Observable<Product[]> {
    return this.httpClient
      .get<GetResponse>(
        `${this.baseUrl}/search/findAllByCategoryId?id=${category}`
      )
      .pipe(map((response) => response._embedded.products));
  }

  getProductsByCategoryPaginated(
    category: string,
    page: number,
    size: number
  ): Observable<GetResponse> {
    const url = `${this.baseUrl}/search/findAllByCategoryId?id=${category}&page=${page}&size=${size}`;
    return this.httpClient.get<GetResponse>(url);
  }

  getProductsByNameLike(name: string): Observable<Product[]> {
    return this.httpClient
      .get<GetResponse>(
        `${this.baseUrl}/search/findByNameContaining?name=${name}`
      )
      .pipe(map((response) => response._embedded.products));
  }

  getProductsByNameLikePaginated(
    name: string,
    page: number,
    size: number
  ): Observable<GetResponse> {
    const url = `${this.baseUrl}/search/findByNameContaining?name=${name}&page=${page}&size=${size}`;
    return this.httpClient.get<GetResponse>(url);
  }

  getProductById(id: string): Observable<Product> {
    const url = `${this.baseUrl}/${id}`;
    return this.httpClient.get<Product>(url);
  }
}

interface GetResponse {
  _embedded: {
    products: Product[];
  };
  page: {
    size: number;
    totalElements: number;
    totalPages: number;
    number: number;
  };
}
