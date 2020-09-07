import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceOverviewCardComponent } from './price-overview-card.component';

describe('PriceOverviewCardComponent', () => {
  let component: PriceOverviewCardComponent;
  let fixture: ComponentFixture<PriceOverviewCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PriceOverviewCardComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceOverviewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
