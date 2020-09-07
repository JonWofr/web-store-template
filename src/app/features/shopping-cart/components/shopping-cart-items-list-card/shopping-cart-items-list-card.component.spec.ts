import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartItemsListCardComponent } from './shopping-cart-items-list-card.component';

describe('ShoppingCartItemsListCardComponent', () => {
  let component: ShoppingCartItemsListCardComponent;
  let fixture: ComponentFixture<ShoppingCartItemsListCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingCartItemsListCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartItemsListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
