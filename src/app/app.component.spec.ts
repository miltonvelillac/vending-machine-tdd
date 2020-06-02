import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Product, productsMock } from './model/product';
import { of } from 'rxjs';

describe('AppComponent', () => {
  let fixture;
  let component;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  describe('#showProductList', () => {
    it(`Should show a list of products`, () => {
      // Arrange:
      const expectedProductsList: Product[] = [
        {
          name: 'snickers',
          price: 10
        },
        {
          name: 'juice',
          price: 5
        },
        {
          name: 'test3',
          price: 8
        },
        {
          name: 'test 4',
          price: 4
        }
        , {
          name: 'chocorramo',
          price: 5
        }
      ];

      spyOn(productsService, 'getAllProducts').and.returnValue(of(productsMock));

      // Act:
      const listOfProducts: any[] = component.getProducts();

      // Assert:
      expect(listOfProducts).toEqual(expectedProductsList);
    });
  });
});
