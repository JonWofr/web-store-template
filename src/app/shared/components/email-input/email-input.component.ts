import { Component, OnInit, Input, forwardRef } from '@angular/core';
import {
  FormGroup,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'shared-email-input',
  templateUrl: './email-input.component.html',
  styleUrls: ['./email-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => {
        console.log('reached this point');
        return EmailInputComponent;
      }),
      multi: true,
    },
  ],
})
export class EmailInputComponent implements ControlValueAccessor {
  value: string = '';
  propagateChange?: (value: any) => {};

  constructor() {}

  /**
   * A method that writes a new value from the form model into the view
   */
  writeValue(value: any): void {
    console.log('Inititalising form control with value', value);
    if (typeof value === 'string') {
      this.value = value;
    }
  }

  /**
   * A method that registers a handler that should be called when something in the view has changed
   */
  registerOnChange(onChangeFunction: any): void {
    console.log('register on change', onChangeFunction);
    this.propagateChange = onChangeFunction;
  }

  /**
   * A method that registers a handler specifically for when a control receives a touch event
   */
  registerOnTouched(): void {}

  /**
   * Is called when the input value of the underlying view is changed
   */
  onChangeValue(value: string): void {
    if (this.propagateChange) {
      this.propagateChange(value);
    }
  }
}
