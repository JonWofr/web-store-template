import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentProgressLevelComponent } from './payment-progress-level.component';

describe('PaymentProgressLevelComponent', () => {
  let component: PaymentProgressLevelComponent;
  let fixture: ComponentFixture<PaymentProgressLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentProgressLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentProgressLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
