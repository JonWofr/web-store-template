import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerMaxNewComponent } from './banner-max-new.component';

describe('BannerMaxNewComponent', () => {
  let component: BannerMaxNewComponent;
  let fixture: ComponentFixture<BannerMaxNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerMaxNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerMaxNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
