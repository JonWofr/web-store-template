import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

// Enums
import { ButtonSize } from '@shared/enums/button-size.enum';
import { PaymentMethod } from '../../enums/payment-method.enum';

// Services
import { PaypalService } from '../../services/paypal/paypal.service';

// Models
import { InputType } from '@shared/enums/input-type.enum';
import { SelectOption } from '@shared/models/select-option.model';
import { EmailInformation } from '../../models/email-information.model';
import { PaymentInformation } from '../../models/payment-information.model';
import { AddressInformation } from '../../models/address-information.model';

@Component({
  selector: 'checkout-overview-progress-level',
  templateUrl: './overview-progress-level.component.html',
  styleUrls: ['./overview-progress-level.component.scss'],
})
export class OverviewProgressLevelComponent {
  @Input() set isShippingAddressMatchingBillingAddress(
    isShippingAddressMatchingBillingAddress: boolean
  ) {
    this.shippingAddressMatchingBillingAddressFormControl = new FormControl(
      isShippingAddressMatchingBillingAddress
    );
  }
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
      this.billingAddressInformationFormGroup = this.parseFormGroupWithoutValidation(
        addressInformation.billingAddressInformation
      );
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

  titleSelectOptions: SelectOption[] = [
    { label: 'Herr', value: 'Herr' },
    { label: 'Frau', value: 'Frau' },
  ];
  countrySelectOptions: SelectOption[] = [
    { label: 'Deutschland', value: 'Deutschland' },
  ];

  emailInformationFormGroup?: FormGroup;
  shippingAddressInformationFormGroup?: FormGroup;
  shippingAddressMatchingBillingAddressFormControl?: FormControl;
  billingAddressInformationFormGroup?: FormGroup;
  paymentInformationFormGroup?: FormGroup;
  paymentMethodRadioButtonLogoUrl?: string;

  InputType = InputType;
  ButtonSize = ButtonSize;

  constructor(
    private formBuilder: FormBuilder,
    public paypalService: PaypalService
  ) {}

  parseFormGroupWithoutValidation(object: any): FormGroup {
    const formGroup = this.formBuilder.group({});
    for (const key in object) {
      if (key in object) {
        const value = object[key];

        if (typeof value === 'object' && value !== null) {
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

  // Using arrow function here seems to be cleaner.
  // The method is called in an unknown context through the paypal script. The this keyword should refer to this context.
  createOrderInterceptor = async () => {
    if (
      this.emailInformationFormGroup &&
      this.shippingAddressInformationFormGroup &&
      this.billingAddressInformationFormGroup
    ) {
      return await this.paypalService.createOrder({
        emailInformation: this.emailInformationFormGroup.value,
        addressInformation: {
          shippingAddressInformation: this.shippingAddressInformationFormGroup
            .value,
          billingAddressInformation: this.billingAddressInformationFormGroup
            .value,
        },
      });
    } else {
      console.warn('Missing required information');
    }
  };
}
