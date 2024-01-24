import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './product.model';
import { CartService } from '../cart/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService, private cartService: CartService, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

  addToCart(product: Product): void {
    console.log("product");
    this.cartService.addToCart(product);
    this.snackBar.open(`${product.name} added to the cart`, 'Dismiss', {
      duration: 2000, 
      horizontalPosition: 'end',
      verticalPosition: 'top',
    });
  }


}
