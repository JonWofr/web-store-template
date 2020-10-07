import { NgModule, Component } from '@angular/core';

// Components

import { SharedModule } from '@shared/shared.module';
import { CommonModule } from '@angular/common';
import { AdvantageComponent } from './components/advantage/advantage.component';
import { AdvantagesComponent } from './components/advantages/advantages.component';
import { BannerMaxComponent } from './components/banner-max/banner-max.component';
import { ProductModule } from '@features/products/products.module';
import { BannerSmallComponent } from './components/banner-small/banner-small.component';
import { SwiperConfigModule } from '@core/swiper-config.module';
import { BannerMaxNewComponent } from './components/banner-max-new/banner-max-new.component';

const declarations = [
  AdvantageComponent,
  AdvantagesComponent,
  BannerMaxComponent,
  BannerSmallComponent,
  BannerMaxNewComponent,
];

@NgModule({
  declarations,
  imports: [SharedModule, CommonModule, ProductModule, SwiperConfigModule],
  exports: [declarations, SharedModule],
  providers: [],
})
export class HomeModule {}
