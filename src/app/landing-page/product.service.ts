// product.service.ts

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from './product.model';


@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Colgate', price: 20 },
    { id: 2, name: 'Medimix', price: 30 },
    { id: 3, name: 'Charger', price: 50 },
    { id: 4, name: 'Pen', price: 80 },
  ];

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }
}
