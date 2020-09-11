import { APP_BASE_HREF, registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';

// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ShoppingCartModule } from '@features/shopping-cart/shopping-cart.module';
import { HomeModule } from '@features/home/home.module';
import { ProductModule } from '@features/products/products.module';
import { SharedModule } from '@shared/shared.module';

// Components
import { AppComponent } from './app.component';
import { NavBarComponent } from '@core/components/nav-bar/nav-bar.component';
import { HomeComponent } from '@core/views/home/home.component';
import { AboutComponent } from '@core/views/about/about.component';
import { ContactComponent } from '@core/views/contact/contact.component';
import { ViewContainerComponent } from '@core/components/view-container/view-container.component';
import { ProductsComponent } from '@core/views/products/products.component';
import { ShoppingCartComponent } from '@core/views/shopping-cart/shopping-cart.component';
import { ProfileComponent } from '@core/views/profile/profile.component';
import { ProductDetailComponent } from './core/views/product-detail/product-detail.component';
import { ColorPalletComponent } from './features/product-detail/components/color-pallet/color-pallet.component';
import { SizeSelectorComponent } from './features/product-detail/components/size-selector/size-selector.component';
import { ProductImageSliderComponent } from './features/product-detail/components/product-image-slider/product-image-slider.component';

// Angular has by default the necessary data to format values in en-US (e.g. with the help of pipes).
// In order to be able to use german formatting we manually have to register corresponding data.
registerLocaleData(localeDe);

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    ProductDetailComponent,
    AboutComponent,
    ContactComponent,
    ViewContainerComponent,
    ProductsComponent,
    ShoppingCartComponent,
    ProfileComponent,
    ColorPalletComponent,
    SizeSelectorComponent,
    ProductImageSliderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ShoppingCartModule,
    HomeModule,
    ProductModule,
  ],
  exports: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    ProductDetailComponent,
    AboutComponent,
    ContactComponent,
    ViewContainerComponent,
    ProductsComponent,
    ShoppingCartComponent,
    ProfileComponent,
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: LOCALE_ID, useValue: 'de' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
