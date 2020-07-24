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
import { DetailComponent } from './core/views/detail/detail.component';
import { AboutComponent } from './core/views/about/about.component';
import { ContactComponent } from './core/views/contact/contact.component';
import { ViewContainerComponent } from './core/components/view-container/view-container.component';
import { ProductsComponent } from './core/views/products/products.component';
import { ShoppingCartComponent } from './core/views/shopping-cart/shopping-cart.component';
import { ProfileComponent } from './core/views/profile/profile.component';

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
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
