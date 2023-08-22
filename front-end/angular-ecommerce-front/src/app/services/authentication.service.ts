import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Customer } from '../dtos/customer';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private loggedInUserSubject: BehaviorSubject<Customer | null> =
    new BehaviorSubject<Customer | null>(null);

  constructor() {}

  login(user: Customer) {
    this.loggedInUserSubject.next(user);
  }

  logout() {
    this.loggedInUserSubject.next(null);
  }

  updateUser(updatedUser: Customer) {
    this.loggedInUserSubject.next(updatedUser);
  }

  get loggedInUser$(): Observable<Customer | null> {
    return this.loggedInUserSubject.asObservable();
  }
}
