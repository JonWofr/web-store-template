import { Component, Input, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'checkout-payment-method-radio-button',
  templateUrl: './payment-method-radio-button.component.html',
  styleUrls: ['./payment-method-radio-button.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PaymentMethodRadioButtonComponent),
      multi: true,
    },
  ],
})
export class PaymentMethodRadioButtonComponent
  implements ControlValueAccessor, OnInit {
  @Input() value: string = '';
  @Input() isDisabled: boolean = false;
  @Input() logoUrl?: string;
  /**
   * This component requires the formControlName property to be existent when using the component inside a FormGroup.
   * When using this component standalone as a FormControl use property name insted
   */
  @Input() set formControlName(formControlName: string) {
    this._name = formControlName;
  }
  @Input() set name(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  elementId?: string;
  isChecked: boolean = false;
  propagateChange?: (value: string) => {};
  propagateBlur?: () => {};
  private _name: string = '';

  ngOnInit(): void {
    this.elementId = uuidv4();
  }

  /**
   * A method that writes a new value from the form model into the view
   */
  writeValue(selectedValue: any): void {
    if (typeof selectedValue === 'string' && selectedValue === this.value) {
      this.isChecked = true;
    }
  }

  /**
   * A method that registers a handler that should be called when something in the view has changed
   */
  registerOnChange(propagateChangeFunction: (value: string) => {}): void {
    this.propagateChange = propagateChangeFunction;
  }

  /**
   * A method that registers a handler specifically for when a control receives a touch event
   */
  registerOnTouched(propagateBlurFunction: () => {}): void {
    this.propagateBlur = propagateBlurFunction;
  }

  /**
   * Is called when the input value of the underlying view is changed
   */
  onChangeValue(value: string): void {
    if (this.propagateChange) {
      this.propagateChange(value);
    }
  }

  /**
   * Is called when the input of the underlying view has been touched
   */
  onBlur(): void {
    if (this.propagateBlur) {
      this.propagateBlur();
    }
  }
}
