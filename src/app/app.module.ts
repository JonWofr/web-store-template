import { APP_BASE_HREF } from '@angular/common';

// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ShoppingCartModule } from './features/shopping-cart/shopping-cart.module';
import { HomeModule } from './features/home/home.module';
import { SharedModule } from './shared/shared.module';

// Components
import { AppComponent } from './app.component';
import { NavBarComponent } from './core/components/nav-bar/nav-bar.component';
import { HomeComponent } from './core/views/home/home.component';
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
    DetailComponent,
    AboutComponent,
    ContactComponent,
    ViewContainerComponent,
    ProductsComponent,
    ShoppingCartComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ShoppingCartModule,
    HomeModule,
    ProductsComponent,
  ],
  exports: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    DetailComponent,
    AboutComponent,
    ContactComponent,
    ViewContainerComponent,
    ProductsComponent,
    ShoppingCartComponent,
    ProfileComponent,
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
