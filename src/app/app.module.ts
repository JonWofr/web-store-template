import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './core/components/nav-bar/nav-bar.component';
import { HomeComponent } from './core/views/home/home.component';
import { AdvantageComponent } from './core/components/advantage/advantage.component';
import { AdvantagesComponent } from './core/components/advantages/advantages.component';
import { BannerMaxComponent } from './core/components/banner-max/banner-max.component';
import { ProductInfoBigComponent } from './core/components/product-info-big/product-info-big.component';
import { ProductCategoryBigComponent } from './core/components/product-category-big/product-category-big.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    AdvantageComponent,
    AdvantagesComponent,
    BannerMaxComponent,
    ProductInfoBigComponent,
    ProductCategoryBigComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
