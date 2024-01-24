
import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartItems: { name: string; price: number }[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe((items) => (this.cartItems = items));
  }

  removeFromCart(item: { name: string; price: number }): void {
    this.cartService.removeFromCart(item);
  }

  getTotalCost(): number {
    return this.cartItems.reduce((acc, item) => acc + item.price, 0);
  }
}
