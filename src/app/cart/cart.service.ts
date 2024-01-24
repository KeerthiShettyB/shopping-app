import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItemsSubject: BehaviorSubject<{ name: string; price: number }[]> = new BehaviorSubject<{ name: string; price: number }[]>([]);
  cartItems$: Observable<{ name: string; price: number }[]> = this.cartItemsSubject.asObservable();

  addToCart(item: { name: string; price: number }): void {
    const currentItems = this.cartItemsSubject.value;
    const updatedItems = [...currentItems, item];
    this.cartItemsSubject.next(updatedItems);
  }

  removeFromCart(item: { name: string; price: number }): void {
    const currentItems = this.cartItemsSubject.value;
    const updatedItems = currentItems.filter((cartItem) => cartItem !== item);
    this.cartItemsSubject.next(updatedItems);
  }
}
