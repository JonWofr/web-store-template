import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { AddressInformation } from '@features/checkout/models/address-information.model';
import { BillingAddressInformation } from '@features/checkout/models/billing-address-information.model';
import { ShippingAddressInformation } from '@features/checkout/models/shipping-address-information.model';
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
export class AddressProgressLevelComponent implements OnDestroy {
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
    this.shippingAddressMatchingBillingAddressCheckbox?.valueChanges.subscribe(
      (isChecked: boolean) => {
        if (isChecked) {
          this.billingAddressInformation = undefined;
        } else {
          this.billingAddressInformation = this.createAddressInformationFormGroup();
        }
      }
    );
  }
  @Output() clickContinueButton = new EventEmitter<AddressInformation>();

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

  createAddressInformationFormGroup(
    addressInformation?: ShippingAddressInformation | BillingAddressInformation
  ): FormGroup {
    return this.formBuilder.group({
      name: this.formBuilder.group({
        title: [
          addressInformation?.name.title,
          Validators.compose([Validators.required]),
        ],
        firstName: [
          addressInformation?.name.firstName,
          Validators.compose([Validators.required]),
        ],
        lastName: [
          addressInformation?.name.lastName,
          Validators.compose([Validators.required]),
        ],
      }),
      address: this.formBuilder.group({
        street: [
          addressInformation?.address.street,
          Validators.compose([
            Validators.required,
            Validators.pattern(/[^0-9]+/),
          ]),
        ],
        houseNumber: [
          addressInformation?.address.houseNumber.toString(),
          Validators.compose([Validators.required, Validators.min(1)]),
        ],
        addition: [addressInformation?.address.addition],
        postCode: [
          addressInformation?.address.postCode.toString(),
          Validators.compose([
            Validators.required,
            Validators.min(1),
            Validators.minLength(5),
            Validators.maxLength(5),
          ]),
        ],
        city: [
          addressInformation?.address.city,
          Validators.compose([
            Validators.required,
            Validators.pattern(/[^0-9]+/),
          ]),
        ],
        country: [
          addressInformation?.address.country,
          Validators.compose([Validators.required]),
        ],
      }),
    });
  }

  onSubmit(): void {
    const addressInformation = {
      shippingAddressInformation: this.shippingAddressInformation?.value,
      billingAddressInformation: this.billingAddressInformation?.value,
    };
    this.clickContinueButton.emit(addressInformation);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }
}
