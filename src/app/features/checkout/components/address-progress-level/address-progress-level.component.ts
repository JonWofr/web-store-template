import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { ButtonSize } from '@shared/enums/button-size.enum';
import { FormValidationErrorKey } from '@shared/enums/form-validation-error-key.enum';
import { InputType } from '@shared/enums/input-type.enum';
import { SelectOption } from '@shared/models/select-option.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'checkout-address-progress-level',
  templateUrl: './address-progress-level.component.html',
  styleUrls: ['./address-progress-level.component.scss'],
})
export class AddressProgressLevelComponent implements OnInit, OnDestroy {
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

  subscriptions: Subscription[] = [];

  InputType = InputType;
  Object = Object;
  ButtonSize = ButtonSize;
  FormValidationErrorKey = FormValidationErrorKey;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.shippingAddressInformation = this.createAddressInformationFormGroup();
    this.shippingAddressMatchingBillingAddressCheckbox = new FormControl(true);
    this.shippingAddressMatchingBillingAddressCheckbox.valueChanges.subscribe(
      (isChecked: boolean) => {
        if (isChecked) {
          this.billingAddressInformation = undefined;
        } else {
          this.billingAddressInformation = this.createAddressInformationFormGroup();
        }
      }
    );
  }

  createAddressInformationFormGroup(): FormGroup {
    return this.formBuilder.group({
      name: this.formBuilder.group({
        title: [null, Validators.compose([Validators.required])],
        firstName: [null, Validators.compose([Validators.required])],
        lastName: [null, Validators.compose([Validators.required])],
      }),
      address: this.formBuilder.group({
        street: [
          null,
          Validators.compose([
            Validators.required,
            Validators.pattern(/[^0-9]+/),
          ]),
        ],
        houseNumber: [
          null,
          Validators.compose([Validators.required, Validators.min(1)]),
        ],
        addition: [null],
        postCode: [
          null,
          Validators.compose([
            Validators.required,
            Validators.min(1),
            Validators.minLength(5),
            Validators.maxLength(5),
          ]),
        ],
        city: [
          null,
          Validators.compose([
            Validators.required,
            Validators.pattern(/[^0-9]+/),
          ]),
        ],
        country: [null, Validators.compose([Validators.required])],
      }),
    });
  }

  onSubmit(): void {
    const addressInformation = {
      shippingAddressInformation: this.shippingAddressInformation?.value,
      billingAddressInformation: this.billingAddressInformation?.value,
    };
    console.log(addressInformation);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }
}
