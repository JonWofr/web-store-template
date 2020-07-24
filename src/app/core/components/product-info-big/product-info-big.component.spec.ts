import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductInfoBigComponent } from './product-info-big.component';

describe('ProductInfoBigComponent', () => {
  let component: ProductInfoBigComponent;
  let fixture: ComponentFixture<ProductInfoBigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductInfoBigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductInfoBigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
