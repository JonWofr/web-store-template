import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentProgressLevelComponent } from './shipment-progress-level.component';

describe('ShipmentProgressLevelComponent', () => {
  let component: ShipmentProgressLevelComponent;
  let fixture: ComponentFixture<ShipmentProgressLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipmentProgressLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentProgressLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
