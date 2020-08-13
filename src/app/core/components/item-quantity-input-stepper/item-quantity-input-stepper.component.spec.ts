import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemQuantityInputStepperComponent } from './item-quantity-input-stepper.component';

describe('ItemQuantityInputStepperComponent', () => {
  let component: ItemQuantityInputStepperComponent;
  let fixture: ComponentFixture<ItemQuantityInputStepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemQuantityInputStepperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemQuantityInputStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
