import { NgModule, Component } from '@angular/core';

// Components

import { SharedModule } from '@shared/shared.module';
import { CommonModule } from '@angular/common';
import { AdvantageComponent } from './components/advantage/advantage.component';
import { AdvantagesComponent } from './components/advantages/advantages.component';
import { BannerMaxComponent } from './components/banner-max/banner-max.component';
import { ProductModule } from '@features/products/products.module';

const declarations = [
  AdvantageComponent,
  AdvantagesComponent,
  BannerMaxComponent,
];

@NgModule({
  declarations,
  imports: [SharedModule, CommonModule, ProductModule],
  exports: [declarations, SharedModule],
  providers: [],
})
export class HomeModule {}
