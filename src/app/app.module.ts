// Modules

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

// Components

import { AppComponent } from './app.component';
import { NavBarComponent } from './core/components/nav-bar/nav-bar.component';
import { HomeComponent } from './core/views/home/home.component';
import { AdvantageComponent } from './core/components/advantage/advantage.component';
import { AdvantagesComponent } from './core/components/advantages/advantages.component';
import { BannerMaxComponent } from './core/components/banner-max/banner-max.component';
import { ProductInfoBigComponent } from './core/components/product-info-big/product-info-big.component';
import { DetailComponent } from './core/views/detail/detail.component';
import { AboutComponent } from './core/views/about/about.component';
import { ContactComponent } from './core/views/contact/contact.component';
import { ViewContainerComponent } from './core/components/view-container/view-container.component';
import { ProductsComponent } from './core/views/products/products.component';
import { ShoppingCartComponent } from './core/views/shopping-cart/shopping-cart.component';
import { ProfileComponent } from './core/views/profile/profile.component';
import { ShoppingCartItemComponent } from './core/components/shopping-cart-item/shopping-cart-item.component';
import { ItemQuantityInputStepperComponent } from './core/components/item-quantity-input-stepper/item-quantity-input-stepper.component';
import { APP_BASE_HREF } from '@angular/common';
import { ShoppingCartItemsListComponent } from './core/components/shopping-cart-items-list/shopping-cart-items-list.component';
import { PriceOverviewCardComponent } from './core/components/price-overview-card/price-overview-card.component';
import { ShoppingCartItemsListCardComponent } from './core/components/shopping-cart-items-list-card/shopping-cart-items-list-card.component';
import { ButtonComponent } from './core/components/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    AdvantageComponent,
    AdvantagesComponent,
    BannerMaxComponent,
    ProductInfoBigComponent,
    DetailComponent,
    AboutComponent,
    ContactComponent,
    ViewContainerComponent,
    ProductsComponent,
    ShoppingCartComponent,
    ProfileComponent,
    ShoppingCartItemComponent,
    ItemQuantityInputStepperComponent,
    ShoppingCartItemsListComponent,
    PriceOverviewCardComponent,
    ShoppingCartItemsListCardComponent,
    ButtonComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  exports: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    AdvantageComponent,
    AdvantagesComponent,
    BannerMaxComponent,
    ProductInfoBigComponent,
    DetailComponent,
    AboutComponent,
    ContactComponent,
    ViewContainerComponent,
    ProductsComponent,
    ShoppingCartComponent,
    ProfileComponent,
    ShoppingCartItemComponent,
    ItemQuantityInputStepperComponent,
    ShoppingCartItemsListComponent,
    PriceOverviewCardComponent,
    ShoppingCartItemsListCardComponent,
    ButtonComponent,
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
