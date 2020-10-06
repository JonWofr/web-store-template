import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewProgressLevelComponent } from './overview-progress-level.component';

describe('OverviewProgressLevelComponent', () => {
  let component: OverviewProgressLevelComponent;
  let fixture: ComponentFixture<OverviewProgressLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewProgressLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewProgressLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
