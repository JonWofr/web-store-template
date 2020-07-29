import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCategoryBigComponent } from './product-category-big.component';

describe('ProductCategoryBigComponent', () => {
  let component: ProductCategoryBigComponent;
  let fixture: ComponentFixture<ProductCategoryBigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCategoryBigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCategoryBigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
