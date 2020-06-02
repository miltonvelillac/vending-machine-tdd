import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

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
      const expectedProductsNumber = 10;

      // Act:
      const listOfProducts: any[] = component.getProducts();

      // Assert:
      expect(listOfProducts.length).toBeGreaterThanOrEqual(expectedProductsNumber);
    });
  });
});
