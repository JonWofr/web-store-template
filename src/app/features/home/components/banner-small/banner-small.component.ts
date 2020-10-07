import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-banner-small',
  templateUrl: './banner-small.component.html',
  styleUrls: ['./banner-small.component.scss'],
})
export class BannerSmallComponent implements OnInit {
  constructor() {}
  config: SwiperConfigInterface = {
    effect: 'cube',
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowScale: 0.94,
    },
    mousewheel: true,
  };
  ngOnInit(): void {}
}
