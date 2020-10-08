import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { HomeComponent } from './core/views/home/home.component';
import { ProductDetailComponent } from './core/views/product-detail/product-detail.component';
import { ContactComponent } from './core/views/contact/contact.component';
import { AboutComponent } from './core/views/about/about.component';
import { ProductsComponent } from './core/views/products/products.component';
import { ShoppingCartComponent } from './core/views/shopping-cart/shopping-cart.component';
import { ProfileComponent } from './core/views/profile/profile.component';

const routes: Routes = [
  {
    path: 'products/:id',
    component: ProductDetailComponent,
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
    loadChildren: () =>
      import('./features/checkout/checkout.module').then(
        (m) => m.CheckoutModule
      ),
  },
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
