import { BillingAddressInformation } from './billing-address-information.model';
import { ShippingAddressInformation } from './shipping-address-information.model';

export interface AddressInformation {
  shippingAddressInformation: ShippingAddressInformation;
  billingAddressInformation?: BillingAddressInformation;
}
