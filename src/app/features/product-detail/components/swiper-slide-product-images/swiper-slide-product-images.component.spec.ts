import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiperSlideProductImagesComponent } from './swiper-slide-product-images.component';

describe('SwiperSlideProductImagesComponent', () => {
  let component: SwiperSlideProductImagesComponent;
  let fixture: ComponentFixture<SwiperSlideProductImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwiperSlideProductImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwiperSlideProductImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
