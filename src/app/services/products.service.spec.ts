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
    it(`Should show a list of products`, () => {
      // Arrange:
      const expectedProducts: Product[] = JSON.parse(JSON.stringify(productsMock));

      // Act:
      const products: Observable<Product[]> = service.getAllProducts();

      // Assert:
      expect(products).toEqual(expectedProducts);
    });
  });
});
