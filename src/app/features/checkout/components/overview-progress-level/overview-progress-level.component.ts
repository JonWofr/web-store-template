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
export class OverviewProgressLevelComponent implements OnInit {
  @Input() addressInformation?: AddressInformation;

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

  ngOnInit(): void {
    if (this.addressInformation) {
      this.shippingAddressInformation = this.createAddressInformationFormGroup(
        this.addressInformation.shippingAddressInformation
      );
      if (this.addressInformation.billingAddressInformation) {
        this.billingAddressInformation = this.createAddressInformationFormGroup(
          this.addressInformation.billingAddressInformation
        );
        this.shippingAddressMatchingBillingAddressCheckbox = new FormControl(
          false
        );
      } else {
        this.shippingAddressMatchingBillingAddressCheckbox = new FormControl(
          true
        );
      }
    }
  }

  createAddressInformationFormGroup(
    addressInformation: ShippingAddressInformation | BillingAddressInformation
  ): FormGroup {
    return this.formBuilder.group({
      name: this.formBuilder.group({
        title: [addressInformation.title],
        firstName: [addressInformation.name.firstName],
        lastName: [addressInformation.name.lastName],
      }),
      address: this.formBuilder.group({
        street: [addressInformation.address.street],
        houseNumber: [addressInformation.address.houseNumber.toString()],
        addition: [addressInformation.address.addition],
        postCode: [addressInformation.address.postCode.toString()],
        city: [addressInformation.address.city],
        country: [addressInformation.address.country],
      }),
    });
  }

  onClickPurchaseButton() {}
}
