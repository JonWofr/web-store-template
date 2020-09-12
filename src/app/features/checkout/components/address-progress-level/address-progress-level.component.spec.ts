import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressProgressLevelComponent } from './address-progress-level.component';

describe('AddressProgressLevelComponent', () => {
  let component: AddressProgressLevelComponent;
  let fixture: ComponentFixture<AddressProgressLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressProgressLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressProgressLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
