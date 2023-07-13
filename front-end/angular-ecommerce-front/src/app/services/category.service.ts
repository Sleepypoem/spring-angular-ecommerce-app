import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Category } from '../dtos/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private url: string = 'http://localhost:8081/categories';

  constructor(private httpClient: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.httpClient
      .get<GetResponse>(this.url)
      .pipe(map((response) => response._embedded.categories));
  }
}

interface GetResponse {
  _embedded: {
    categories: Category[];
  };
}
