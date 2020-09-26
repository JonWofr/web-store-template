import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentMethodRadioButtonComponent } from './payment-method-radio-button.component';

describe('PaymentMethodRadioButtonComponent', () => {
  let component: PaymentMethodRadioButtonComponent;
  let fixture: ComponentFixture<PaymentMethodRadioButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentMethodRadioButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentMethodRadioButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
