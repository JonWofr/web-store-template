import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { PaymentMethod } from '@features/checkout/enums/payment-method.enum';
import { AddressInformation } from '@features/checkout/models/address-information.model';
import { BillingAddressInformation } from '@features/checkout/models/billing-address-information.model';
import { EmailInformation } from '@features/checkout/models/email-information.model';
import { PaymentInformation } from '@features/checkout/models/payment-information.model';
import { ShippingAddressInformation } from '@features/checkout/models/shipping-address-information.model';
import { ButtonSize } from '@shared/enums/button-size.enum';
import { InputType } from '@shared/enums/input-type.enum';
import { SelectOption } from '@shared/models/select-option.model';

@Component({
  selector: 'checkout-overview-progress-level',
  templateUrl: './overview-progress-level.component.html',
  styleUrls: ['./overview-progress-level.component.scss'],
})
export class OverviewProgressLevelComponent {
  @Input() set emailInformation(
    emailInformation: EmailInformation | undefined
  ) {
    console.log('setting email information to: ', emailInformation);
    if (emailInformation) {
      this.emailInformationFormGroup = this.parseFormGroupWithoutValidation(
        emailInformation
      );
    }
  }
  @Input() set addressInformation(
    addressInformation: AddressInformation | undefined
  ) {
    console.log('setting address information to: ', addressInformation);
    if (addressInformation) {
      this.shippingAddressInformationFormGroup = this.parseFormGroupWithoutValidation(
        addressInformation.shippingAddressInformation
      );
      if (addressInformation.billingAddressInformation) {
        this.billingAddressInformationFormGroup = this.parseFormGroupWithoutValidation(
          addressInformation.billingAddressInformation
        );
        this.shippingAddressMatchingBillingAddressFormControl = new FormControl(
          false
        );
      } else {
        this.shippingAddressMatchingBillingAddressFormControl = new FormControl(
          true
        );
      }
    }
  }
  @Input() set paymentInformation(
    paymentInformation: PaymentInformation | undefined
  ) {
    console.log('setting payment information to: ', paymentInformation);
    if (paymentInformation) {
      this.paymentInformationFormGroup = this.parseFormGroupWithoutValidation(
        paymentInformation
      );
      this.paymentMethodRadioButtonLogoUrl = this.determinePaymentMethodRadioButtonLogoUrl(
        paymentInformation.paymentMethod
      );
    }
  }

  shippingAddressInformationFormGroup?: FormGroup;
  shippingAddressMatchingBillingAddressFormControl?: FormControl;
  billingAddressInformationFormGroup?: FormGroup;
  titleSelectOptions: SelectOption[] = [
    { label: 'Herr', value: 'Herr' },
    { label: 'Frau', value: 'Frau' },
  ];
  countrySelectOptions: SelectOption[] = [
    { label: 'Deutschland', value: 'Deutschland' },
  ];
  emailInformationFormGroup?: FormGroup;
  paymentInformationFormGroup?: FormGroup;
  paymentMethodRadioButtonLogoUrl?: string;

  InputType = InputType;
  ButtonSize = ButtonSize;

  constructor(private formBuilder: FormBuilder) {}

  parseFormGroupWithoutValidation(object: any): FormGroup {
    const formGroup = this.formBuilder.group({});
    for (const key in object) {
      if (key in object) {
        const value = object[key];

        if (typeof value === 'object') {
          formGroup.addControl(
            key,
            this.parseFormGroupWithoutValidation(value)
          );
        } else {
          formGroup.addControl(key, new FormControl(value));
        }
      }
    }
    return formGroup;
  }

  determinePaymentMethodRadioButtonLogoUrl(
    paymentMethod: PaymentMethod
  ): string {
    switch (paymentMethod) {
      case PaymentMethod.Paypal:
        return 'assets/images/paypal-logo.png';
      case PaymentMethod.Sepa:
        return 'assets/images/sepa-logo.png';
      case PaymentMethod.Sofort:
        return 'assets/images/sofort-logo.png';
      case PaymentMethod.Card:
        return 'assets/images/card-logo.png';
    }
  }

  onClickPurchaseButton() {}
}
