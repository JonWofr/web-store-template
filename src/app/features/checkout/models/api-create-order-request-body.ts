import { AddressInformation } from './address-information.model';
import { EmailInformation } from './email-information.model';

export interface ApiCreateOrderRequestBody {
  emailInformation: EmailInformation;
  addressInformation: AddressInformation;
}
