import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerMaxComponent } from './banner-max.component';

describe('BannerMaxComponent', () => {
  let component: BannerMaxComponent;
  let fixture: ComponentFixture<BannerMaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerMaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerMaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
