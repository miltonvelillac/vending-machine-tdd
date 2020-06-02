import { TestBed } from '@angular/core/testing';

import { ProductsService } from './products.service';
import { Observable } from 'rxjs';
import { Product, productsMock } from '../model/product';

describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#getAllProducts', () => {
    it(`Should get the list of all products`, () => {
      // Arrange:
      const expectedProducts: Product[] = JSON.parse(JSON.stringify(productsMock));
      let products: Product[];

      // Act:
      service.getAllProducts().subscribe((productsResponse: Product[]) => products = productsResponse);

      // Assert:
      expect(products).toEqual(expectedProducts);
    });
  });
});
