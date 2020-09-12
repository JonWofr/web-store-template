import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { HomeComponent } from './core/views/home/home.component';
import { DetailComponent } from './core/views/detail/detail.component';
import { ContactComponent } from './core/views/contact/contact.component';
import { AboutComponent } from './core/views/about/about.component';
import { ProductsComponent } from './core/views/products/products.component';
import { ShoppingCartComponent } from './core/views/shopping-cart/shopping-cart.component';
import { ProfileComponent } from './core/views/profile/profile.component';
import { CheckoutComponent } from './core/views/checkout/checkout.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'products/:id',
    component: DetailComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'shopping-cart',
    component: ShoppingCartComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
