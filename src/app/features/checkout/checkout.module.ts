import { NgModule } from '@angular/core';

// Modules
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Components
import { ProgressIndicatorComponent } from './components/progress-indicator/progress-indicator.component';
import { EmailProgressLevelComponent } from './components/email-progress-level/email-progress-level.component';
import { AddressProgressLevelComponent } from './components/address-progress-level/address-progress-level.component';
import { ShipmentProgressLevelComponent } from './components/shipment-progress-level/shipment-progress-level.component';
import { PaymentProgressLevelComponent } from './components/payment-progress-level/payment-progress-level.component';
import { OverviewProgressLevelComponent } from './components/overview-progress-level/overview-progress-level.component';
import { PaymentMethodRadioButtonComponent } from './components/payment-method-radio-button/payment-method-radio-button.component';

const declarations = [
  ProgressIndicatorComponent,
  EmailProgressLevelComponent,
  AddressProgressLevelComponent,
  ShipmentProgressLevelComponent,
  PaymentProgressLevelComponent,
  OverviewProgressLevelComponent,
  PaymentMethodRadioButtonComponent,
];

@NgModule({
  declarations: [...declarations],
  imports: [CommonModule, SharedModule, FormsModule, ReactiveFormsModule],
  exports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    declarations,
  ],
  providers: [],
})
export class CheckoutModule {}
