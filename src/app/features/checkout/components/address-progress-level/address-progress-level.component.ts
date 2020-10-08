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
export class AddressProgressLevelComponent implements OnInit, OnDestroy {
  @Output()
  changeShippingAddressMatchingBillingAddressCheckbox = new EventEmitter<
    boolean
  >();
  @Output() clickContinueButton = new EventEmitter<AddressInformation>();

  shippingAddressInformationFormGroup?: FormGroup;
  shippingAddressMatchingBillingAddressCheckboxFormControl?: FormControl;
  billingAddressInformationFormGroup?: FormGroup;

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
    this.shippingAddressInformationFormGroup = this.createAddressInformationFormGroup();
    this.billingAddressInformationFormGroup = this.createAddressInformationFormGroup();

    this.shippingAddressMatchingBillingAddressCheckboxFormControl = new FormControl(
      true
    );
    this.shippingAddressMatchingBillingAddressCheckboxFormControl?.valueChanges.subscribe(
      (isChecked: boolean) => {
        this.changeShippingAddressMatchingBillingAddressCheckbox.emit(
          isChecked
        );
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
      shippingAddressInformation: this.shippingAddressInformationFormGroup
        ?.value,
      billingAddressInformation: this
        .shippingAddressMatchingBillingAddressCheckboxFormControl
        ? this.shippingAddressInformationFormGroup?.value
        : this.billingAddressInformationFormGroup?.value,
    };
    this.clickContinueButton.emit(addressInformation);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }
}
