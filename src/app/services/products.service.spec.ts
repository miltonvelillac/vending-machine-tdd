import { TestBed } from '@angular/core/testing';

import { ProductsService } from './products.service';

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

      // Act:
      const listOfProducts: any[] = service.getAllProducts();

      // Assert:
      expect(listOfProducts).toEqual(expectedProductsList);
    });
  });
});
