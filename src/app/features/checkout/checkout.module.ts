import { NgModule } from '@angular/core';

// Modules
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CheckoutRoutingModule } from './checkout-routing.module';

// Services
import { PaypalService } from './services/paypal/paypal.service';

// Components
import { ProgressIndicatorComponent } from './components/progress-indicator/progress-indicator.component';
import { EmailProgressLevelComponent } from './components/email-progress-level/email-progress-level.component';
import { AddressProgressLevelComponent } from './components/address-progress-level/address-progress-level.component';
import { ShipmentProgressLevelComponent } from './components/shipment-progress-level/shipment-progress-level.component';
import { PaymentProgressLevelComponent } from './components/payment-progress-level/payment-progress-level.component';
import { OverviewProgressLevelComponent } from './components/overview-progress-level/overview-progress-level.component';
import { PaymentMethodRadioButtonComponent } from './components/payment-method-radio-button/payment-method-radio-button.component';
import { PaymentButtonComponent } from './components/payment-button/payment-button.component';
import { PaymentSuccessComponent } from './views/payment-success/payment-success.component';
import { PaymentFailureComponent } from './views/payment-failure/payment-failure.component';
import { CheckoutComponent } from './checkout.component';
import { HomeComponent } from './views/home/home.component';

const declarations = [
  ProgressIndicatorComponent,
  EmailProgressLevelComponent,
  AddressProgressLevelComponent,
  ShipmentProgressLevelComponent,
  PaymentProgressLevelComponent,
  OverviewProgressLevelComponent,
  PaymentMethodRadioButtonComponent,
  PaymentButtonComponent,
  PaymentSuccessComponent,
  PaymentFailureComponent,
  CheckoutComponent,
  HomeComponent,
];

const imports = [
  CommonModule,
  SharedModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
  CheckoutRoutingModule,
];

const providers = [PaypalService];

@NgModule({
  declarations: [...declarations, CheckoutComponent],
  imports: [...imports],
  exports: [...imports, ...declarations],
  providers: [...providers],
})
export class CheckoutModule {}
