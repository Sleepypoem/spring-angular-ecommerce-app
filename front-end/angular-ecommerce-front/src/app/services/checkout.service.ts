import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Purchase } from '../dtos/purchase';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  private baseUrl: string = environment.backendUrl + 'checkout/purchase';

  constructor(private http: HttpClient) {}

  public makeOrder(purchase: Purchase): Observable<any> {
    return this.http.post<Purchase>(this.baseUrl, purchase);
  }
}
