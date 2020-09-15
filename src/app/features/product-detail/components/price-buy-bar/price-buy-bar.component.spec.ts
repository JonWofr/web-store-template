import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceBuyBarComponent } from './price-buy-bar.component';

describe('PriceBuyBarComponent', () => {
  let component: PriceBuyBarComponent;
  let fixture: ComponentFixture<PriceBuyBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceBuyBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceBuyBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
