import { RouterModule, Route } from '@angular/router';
import { NgModule } from '@angular/core';

// Views
import { HomeComponent } from './views/home/home.component';
import { PaymentFailureComponent } from './views/payment-failure/payment-failure.component';
import { PaymentSuccessComponent } from './views/payment-success/payment-success.component';
import { CheckoutComponent } from './checkout.component';

const routes: Route[] = [
  {
    path: '',
    component: CheckoutComponent,
    children: [
      {
        path: 'payment-success',
        component: PaymentSuccessComponent,
      },
      {
        path: 'payment-failure',
        component: PaymentFailureComponent,
      },
      {
        path: '',
        component: HomeComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckoutRoutingModule {}
