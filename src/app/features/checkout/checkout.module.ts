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

const declarations = [
  ProgressIndicatorComponent,
  EmailProgressLevelComponent,
  AddressProgressLevelComponent,
];

@NgModule({
  declarations: [...declarations, ShipmentProgressLevelComponent, PaymentProgressLevelComponent],
  imports: [CommonModule, SharedModule, FormsModule, ReactiveFormsModule],
  exports: [declarations],
  providers: [],
})
export class CheckoutModule {}
