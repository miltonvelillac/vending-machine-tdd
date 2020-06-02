import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product, productsMock } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getAllProducts(): Observable<Product[]> {
    return of(productsMock);
  }
}
