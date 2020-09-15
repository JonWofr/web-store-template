import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { AddressInformation } from '@features/checkout/models/address-information.model';
import { BillingAddressInformation } from '@features/checkout/models/billing-address-information.model';
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
  @Input() set addressInformation(
    addressInformation: AddressInformation | undefined
  ) {
    this.shippingAddressInformation = this.createAddressInformationFormGroup(
      addressInformation?.shippingAddressInformation
    );
    if (this.addressInformation?.billingAddressInformation) {
      this.billingAddressInformation = this.createAddressInformationFormGroup(
        addressInformation?.billingAddressInformation
      );
    }

    this.shippingAddressMatchingBillingAddressCheckbox = new FormControl(
      addressInformation?.billingAddressInformation ? false : true
    );
  }

  shippingAddressInformation?: FormGroup;
  shippingAddressMatchingBillingAddressCheckbox?: FormControl;
  billingAddressInformation?: FormGroup;

  titleSelectOptions: SelectOption[] = [
    { label: 'Herr', value: 'Herr' },
    { label: 'Frau', value: 'Frau' },
  ];
  countrySelectOptions: SelectOption[] = [
    { label: 'Deutschland', value: 'Deutschland' },
  ];

  InputType = InputType;
  ButtonSize = ButtonSize;

  constructor(private formBuilder: FormBuilder) {}

  createAddressInformationFormGroup(
    addressInformation?: ShippingAddressInformation | BillingAddressInformation
  ): FormGroup {
    return this.formBuilder.group({
      name: this.formBuilder.group({
        title: [addressInformation?.name.title],
        firstName: [addressInformation?.name.firstName],
        lastName: [addressInformation?.name.lastName],
      }),
      address: this.formBuilder.group({
        street: [addressInformation?.address.street],
        houseNumber: [addressInformation?.address.houseNumber.toString()],
        addition: [addressInformation?.address.addition],
        postCode: [addressInformation?.address.postCode.toString()],
        city: [addressInformation?.address.city],
        country: [addressInformation?.address.country],
      }),
    });
  }

  onClickPurchaseButton() {}
}
