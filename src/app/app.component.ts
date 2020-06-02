import { Component } from '@angular/core';
import { Product, productsMock } from './model/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  getProducts(): Product[] {
    return productsMock;
  }
}
